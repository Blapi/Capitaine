import config from '../config/config'
import {jsonFetch} from '../utils/easyFetch'

const { clientId, clientSecret, url } = config.api

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

export function getData(token) {
  return dispatch => {
    dispatch(asyncDataStarted())
  return Promise.all([
    jsonFetch(`${url}/api/flights`)
      .setHeaders({Authorization: `Bearer ${token}`})
      .get()
      .then(response => Promise.resolve({flights: response}))
      .catch(error => console.log(error)),
    jsonFetch(`${url}/api/planes`)
      .setHeaders({Authorization: `Bearer ${token}`})
      .get()
      .then(response => Promise.resolve({planes: response}))
      .catch(error => console.log(error)),
    jsonFetch(`${url}/api/airfields`)
      .setHeaders({Authorization: `Bearer ${token}`})
      .get()
      .then(response => Promise.resolve({airfields: response}))
      .catch(error => console.log(error))
    ])
  .then(values => {
    var data = {}
    values.map(value => data = {...data, ...value})
    dispatch(asyncDataFinished(data))
  })}
}
