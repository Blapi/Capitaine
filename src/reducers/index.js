import {combineReducers} from 'redux'
import routerReducer from './RouterReducer'
import syncDataReducer from './SyncDataReducer'
import tokenReducer from './TokenReducer'

const rootReducer = combineReducers({
	syncData: syncDataReducer,
	tokens: tokenReducer,
	routing: routerReducer,
})

export default rootReducer