import {REQUEST_START, REQUEST_END} from '../actions/DataActions'

const initialState = {
	requesting: false,
	flights: {},
	planes: {},
	airfields: {},
	stats: {}
}

function syncDataReducer(state = initialState, action) {
	switch (action.type) {
		case REQUEST_START:
			return {...state, requesting: true}
		case REQUEST_END:
			return {...state, requesting: false, flights: action.result.flights, planes: action.result.planes, airfields: action.result.airfields, stats: action.result.stats}
		default:
			return state
    }
}

export default syncDataReducer