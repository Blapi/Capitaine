import React from 'react'
import thunkMiddleware from 'redux-thunk'
import {Provider, connect} from 'react-redux'
import {Router, Scene} from 'react-native-router-flux'
import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import Home from './presentationals/Home'


const ReduxRouter = connect()(Router)
const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

class Capitaine extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter>
          <Scene key='root' noNavBar>
            <Scene key='Home' component={Home} type='replace' initial />
          </Scene>
        </ReduxRouter>
      </Provider>
    )
  }
}

export default Capitaine