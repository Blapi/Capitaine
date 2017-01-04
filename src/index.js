import React from 'react'
import {ToastAndroid} from 'react-native'
import thunkMiddleware from 'redux-thunk'
import {Provider, connect} from 'react-redux'
import {Router, Scene, Actions, ActionConst} from 'react-native-router-flux'
import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import StartContainer from './containers/StartContainer'
import Welcome from './presentationals/Welcome'
import LoginContainer from './containers/LoginContainer'
import SignupContainer from './containers/SignupContainer'
import Home from './presentationals/Home'
import CapDrawer from './presentationals/CapDrawer'
import Stats from './presentationals/Stats'
import Flights from './presentationals/Flights'
import Services from './presentationals/Services'
import Tracking from './presentationals/Tracking'
import FlightContainer from './containers/FlightContainer'

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
  rightButtonIconStyle: {
    height: 36,
    width: 36
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
            hideNavBar>
            <Scene
              key='start'
              component={StartContainer}
              hideNavBar
              initial />
            <Scene
              key='welcome'
              component={Welcome}
              hideNavBar />
            <Scene
              key='login'
              component={LoginContainer}
              hideNavBar={false}
              title={`S'IDENTIFIER`}
              titleStyle={styles.regularTitleStyle} />
            <Scene
              key='signup'
              component={SignupContainer}
              hideNavBar={false}
              titile='CREER UN COMPTE'
              titleStyle={styles.regularTitleStyle} />
            <Scene
              key='drawer'
              component={CapDrawer}
              open={false}
              tabs>
              <Scene
                key='home'
                type={ActionConst.REPLACE}
                component={Home}
                hideNavBar={false}
                title='Capitaine'
                titleStyle={styles.homeTitleStyle}
                renderBackButton={() => {null}}
                onRight={() => Actions.refresh({key: 'drawer', open: value => !value})}
                rightButtonImage={require('./images/Dot.png')}
                rightButtonIconStyle={styles.rightButtonIconStyle} />
            </Scene>
            <Scene
              key='stats'
              component={Stats}
              hideNavBar={false}
              title='STATISTIQUES'
              titleStyle={styles.regularTitleStyle} />
            <Scene
              key='flightbook'
              component={Flights}
              hideNavBar={false}
              title='CARNET DE VOL'
              titleStyle={styles.regularTitleStyle} 
              onRight={() => Actions.flight()}
              rightButtonImage={require('./images/Bell.png')}
              rightButtonIconStyle={styles.rightButtonIconStyle} />
            <Scene
              key='services'
              component={Services}
              hideNavBar={false}
              title='SERVICES AÉRONAUTIQUES'
              titleStyle={styles.regularTitleStyle} />
            <Scene
              key='flight'
              component={FlightContainer}
              hideNavBar={false}
              title={`AJOUT D'UN VOL`}
              titleStyle={styles.regularTitleStyle} />
            <Scene
              key='tracking'
              component={Tracking}
              hideNavBar={false}
              title='SUIVI EN TEMPS RÉEL'
              titleStyle={styles.regularTitleStyle} />
          </Scene>
        </ReduxRouter>
      </Provider>
    )
  }
}

export default Capitaine