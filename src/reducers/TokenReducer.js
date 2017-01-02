import {REQUEST_START, REQUEST_END} from '../actions/TokenActions'

const initialState = {
	requesting: false,
	tokens: {}
}

function tokenReducer(state = initialState, action) {
	switch (action.type) {
		case REQUEST_START:
			return {...state, requesting: true}
		case REQUEST_END:
			return {...state, requesting: false, tokens: action.result}
		default:
			return state
    }
}

export default tokenReducer