import config from '../config/config'
import {jsonFetch} from '../utils/easyFetch'

const { clientId, clientSecret, url, testToken } = config.api

export const REQUEST_START = 'REQUEST_START'
export const REQUEST_END = 'REQUEST_END'

function asyncDataStarted() {
  return {
    type: REQUEST_START
  }
}

function asyncDataFinished(result) {
  return {
    type: REQUEST_END,
    result
  }
}

export function getData() {
  return dispatch => {
    dispatch(asyncDataStarted())
  return Promise.all([
    jsonFetch(`${url}/api/flight`)
      .setHeaders({Authorization: `Bearer ${testToken}`})
      .get()
      .then(response => Promise.resolve({flights: response}))
      .catch(error => console.log(error)),
    jsonFetch(`${url}/api/plane`)
      .setHeaders({Authorization: `Bearer ${testToken}`})
      .get()
      .then(response => Promise.resolve({planes: response}))
      .catch(error => console.log(error)),
    jsonFetch(`${url}/api/airfields`)
      .setHeaders({Authorization: `Bearer ${testToken}`})
      .get()
      .then(response => Promise.resolve({airfields: response}))
      .catch(error => console.log(error))
    ])
  .then(values => {
    var data = {}
    values.map(value => data = {...data, ...value})
    dispatch(asyncDataFinished(data))
  })
  }
}