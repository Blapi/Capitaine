import {combineReducers} from 'redux'
import routerReducer from './RouterReducer'
import syncDataReducer from './SyncDataReducer'

const rootReducer = combineReducers({
	syncData: syncDataReducer,
	routing: routerReducer,
})

export default rootReducer