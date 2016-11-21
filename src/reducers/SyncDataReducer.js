import {REQUEST_START, REQUEST_END} from '../actions/DataActions'

const initialState = {
	requesting: false,
	flights: {},
	planes: {},
	airfields: {}
}

function syncDataReducer(state = initialState, action) {
	switch (action.type) {
		case REQUEST_START:
			return {...state, requesting: true}
		case REQUEST_END:
			return {...state, requesting: false, flights: action.flights, planes: action.planes, airfields: action.airfields}
		default:
			return state
    }
}

export default syncDataReducer