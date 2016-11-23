import React from 'react'
import {ToastAndroid} from 'react-native'
import thunkMiddleware from 'redux-thunk'
import {Provider, connect} from 'react-redux'
import {Router, Scene, Actions, ActionConst} from 'react-native-router-flux'
import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import Home from './presentationals/Home'
import CapDrawer from './presentationals/CapDrawer'
import Flights from './presentationals/Flights'
import Services from './presentationals/Services'
import Tracking from './presentationals/Tracking'

const ReduxRouter = connect()(Router)
const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

const styles = {
  navigationBarStyle: {
    backgroundColor: '#75bec6',
    height: 54
  },
  homeTitleStyle: {
    fontFamily: '5thgradecursive-2-italic',
    color: 'white'
  },
  regularTitleStyle: {
    fontFamily: '5thgradecursive-2-italic',
    color: 'white',
    fontFamily: 'calibril',
    fontSize: 16
  },
  leftButtonIconStyle: {
    height: 36,
    width: 36,
  }
}

/*
 * !!!!! ADD PADDING TOP WHEN USING NAVBAR !!!!!
*/

class Capitaine extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter
          navigationBarStyle={styles.navigationBarStyle}>
          <Scene
            key='root'
            hideNavBar={true}>
            <Scene
              key='drawer'
              component={CapDrawer}
              open={false}
              tabs={true}>
              <Scene
                key='Home'
                type={ActionConst.REPLACE}
                component={Home}
                hideNavBar={false}
                title='Capitaine'
                titleStyle={styles.homeTitleStyle}
                onLeft={() => Actions.refresh({key: 'drawer', open: value => !value})}
                leftButtonImage={require('./images/Dot.png')}
                leftButtonIconStyle={styles.leftButtonIconStyle}
                initial />
            </Scene>
            <Scene
              key='tracking'
              component={Tracking}
              hideNavBar={false}
              title='SUIVI EN TEMPS RÉEL'
              titleStyle={styles.regularTitleStyle} />
            <Scene
              key='flightbook'
              component={Flights}
              hideNavBar={false}
              title='CARNET DE VOL'
              titleStyle={styles.regularTitleStyle} />
            <Scene
              key='services'
              component={Services}
              hideNavBar={false}
              title='SERVICES AÉRONAUTIQUES'
              titleStyle={styles.regularTitleStyle} />
          </Scene>
        </ReduxRouter>
      </Provider>
    )
  }
}

export default Capitaine