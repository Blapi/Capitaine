import React from 'react'
import {View, Text, Image, TouchableHighlight, ToastAndroid, AsyncStorage} from 'react-native'
import {Actions, ActionConst} from 'react-native-router-flux'
import {vw, vh} from 'react-native-viewport-units'
import {Hr} from 'react-native-hr'

const styles = {
  main: {
    flex: 1,
    width: 70*vw,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#0d3d47',
    flexWrap: 'wrap'
  },
  cell: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center'
  },
  line: {
    height: 1,
    width: 70*vw,
    backgroundColor: 'white',
    marginTop: 30,
  },
  image: {
    height: 30,
    width: 30,
    marginLeft: 30
  },
  text: {
    marginLeft: 30,
    color: 'white',
    fontFamily: 'calibril',
    fontSize: 16,
  },
  highlight: {
    width: 70*vw
  }
}

function handleDisconnect() {
  AsyncStorage.clear()
    .then(() => {
      ToastAndroid.show('Déconnecté', ToastAndroid.SHORT)
      Actions.welcome({type: ActionConst.RESET})
    })
}

class SideMenu extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <TouchableHighlight
          underlayColor='transparent'
          style={styles.highlight}
          onPress={() => Actions.refresh({key: 'drawer', open: value => !value})}>
          <View style={styles.cell}>
            <Image source={require('../images/Plane.png')} style={styles.image}/>
            <Text style={styles.text}>ACCUEIL</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor='transparent'
          style={styles.highlight}
          onPress={() => Actions.stats({stats: this.props.stats})}>
          <View style={styles.cell}>
            <Image source={require('../images/User.png')} style={styles.image}/>
            <Text style={styles.text}>STATISTIQUES</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor='transparent'
          style={styles.highlight}
          onPress={() => Actions.flightbook({flights: this.props.flights, planes: this.props.planes})}>
          <View style={styles.cell}>
            <Image source={require('../images/Book.png')} style={styles.image}/>
            <Text style={styles.text}>CARNET</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor='transparent'
          style={styles.highlight}
          onPress={() => Actions.services({airfields: this.props.airfields})}>
          <View style={styles.cell}>
            <Image source={require('../images/Loop.png')} style={styles.image}/>
            <Text style={styles.text}>SERVICES</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.line}/>
        <TouchableHighlight
          underlayColor='transparent'
          style={styles.highlight}
          onPress={() => handleDisconnect()}>
          <View style={styles.cell}>
            <Text style={styles.text}>DÉCONNEXION</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

export default SideMenu
