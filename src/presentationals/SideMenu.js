import React from 'react'
import {View, Text, Image, TouchableHighlight, ToastAndroid} from 'react-native'
import {Actions} from 'react-native-router-flux'
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
          onPress={() => ToastAndroid.show('WIP', ToastAndroid.SHORT)}>
          <View style={styles.cell}>
            <Image source={require('../images/User.png')} style={styles.image}/>
            <Text style={styles.text}>PROFIL</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor='transparent'
          style={styles.highlight}
          onPress={() => Actions.tracking()}>
          <View style={styles.cell}>
            <Image source={require('../images/Marker.png')} style={styles.image}/>
            <Text style={styles.text}>SUIVI</Text>
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
          onPress={() => Actions.services()}>
          <View style={styles.cell}>
            <Image source={require('../images/Loop.png')} style={styles.image}/>
            <Text style={styles.text}>SERVICES</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.line}/>
        <TouchableHighlight
          underlayColor='transparent'
          style={styles.highlight}
          onPress={() => ToastAndroid.show('WIP', ToastAndroid.SHORT)}>
          <View style={styles.cell}>
            <Text style={styles.text}>PARAMÈTRES</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor='transparent'
          style={styles.highlight}
          onPress={() => ToastAndroid.show('WIP', ToastAndroid.SHORT)}>
          <View style={styles.cell}>
            <Text style={styles.text}>AIDE</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor='transparent'
          style={styles.highlight}
          onPress={() => ToastAndroid.show('WIP', ToastAndroid.SHORT)}>
          <View style={styles.cell}>
            <Text style={styles.text}>DÉCONNEXION</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

export default SideMenu