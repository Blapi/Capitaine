import {View, Text, Image, TouchableHighlight, ToastAndroid} from 'react-native'
import React from 'react'
import {Actions} from 'react-native-router-flux'
import Spinner from 'react-native-loading-spinner-overlay'
import {vw, vh} from 'react-native-viewport-units'

const styles = {
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    flex: 1,
    width: 100*vw,
    marginTop: 1.5*vh,
    marginLeft: 25,
    color: 'white',
    fontFamily: 'calibril',
    fontSize: 16
  },
  flexElement: {
    flex: 1
  }
}

class Menu extends React.Component {
  componentWillMount() {
    this.props.getData()
  }

  componentDidUpdate() {
    // ToDo: timer for syncing
  }


  render() {
    return (
      <View style={styles.main}>
        {this.props.requesting
        ?
        <View style={styles.main}>
          <Spinner visible={true}/>
        </View>
        :
        <View>
          <TouchableHighlight
            style={styles.flexElement}
            onPress={() => Actions.tracking()}>
            <Image source={require('../images/Home_suivi.jpg')} style={styles.image}>
              <Text style={styles.text}>SUIVI EN TEMPS RÉEL</Text>
            </Image>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.flexElement}
            onPress={() => Actions.flightbook({flights: this.props.flights, planes: this.props.planes})}>
            <Image source={require('../images/Home_carnet.jpg')} style={styles.image}>
              <Text style={styles.text}>CARNET DE VOL</Text>
            </Image>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.flexElement}
            onPress={() => Actions.services()}>
            <Image source={require('../images/Home_service.jpg')} style={styles.image}>
              <Text style={styles.text}>SERVICES AÉRONAUTIQUES</Text>
            </Image>
          </TouchableHighlight>
        </View>}
      </View>
    )
  }
}

export default Menu