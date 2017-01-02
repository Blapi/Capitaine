import {AsyncStorage} from 'react-native'
import config from '../config/config'
import {easyFetch, jsonFetch} from '../utils/easyFetch'


const { clientId, clientSecret, url } = config.api

export const REQUEST_START = 'REQUEST_START'
export const REQUEST_END = 'REQUEST_END'

function asyncGetterStarted() {
  return {
    type: REQUEST_START
  }
}

function asyncGetterFinished(result) {
	console.log(result)

	if (result) { AsyncStorage.multiSet([['access_token', result.access_token], ['refresh_token', result.refresh_token]]) }

	return {
	  type: REQUEST_END,
	  result
	}
}

export function getTokenWithRefresh() {
	return dispatch => {
		dispatch(asyncGetterStarted())
		return AsyncStorage.getItem('refresh_token')
	    			.then(value => {
	    				console.log(value)
	    				return Promise.resolve(
	    					easyFetch(`${url}/auth/token`)
	    						.setQueryParams({client_id: clientId, client_secret: clientSecret, grant_type: 'refresh_token', refresh_token: value})
									.post())
	    						.then(response => response.json()
	    						.then(data => dispatch(asyncGetterFinished(data))))
									.catch(error => dispatch(asyncGetterFinished({})))
			    	})
	    			.catch(error => dispatch(asyncGetterFinished({})))
	}
}

export function getTokenWithNoRefresh(username, password) {
	return dispatch => {
		dispatch(asyncGetterStarted())
		return Promise.resolve(
			easyFetch(`${url}/auth/token`)
				.setQueryParams({client_id: clientId, client_secret: clientSecret, grant_type: 'password', username: username, password: password})
				.post())
				.then(response => response.json()
				.then(data => dispatch(asyncGetterFinished(data))))
				.catch(error => dispatch(asyncGetterFinished({})))
	}
}

export function addUser(username, password, mailAddress) {
  return dispatch => {
    dispatch(asyncGetterStarted())
	  return Promise.resolve(
			jsonFetch(`${url}/auth/users`)
				.post({email: mailAddress, password: password, username: username, isActive: true, first_name: 'MAURICE', last_name: 'LABANANE'}))
				.then(response => dispatch(getTokenWithNoRefresh(response.username, password)))
				.catch(error => dispatch(asyncGetterFinished({})))
  }
}