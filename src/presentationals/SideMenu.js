import React from 'react'
import {View, Text, Image} from 'react-native'
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
  }
}

class SideMenu extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.cell}>
          <Image source={require('../images/Plane.png')} style={styles.image}/>
          <Text style={styles.text}>ACCUEIL</Text>
        </View>
        <View style={styles.cell}>
          <Image source={require('../images/User.png')} style={styles.image}/>
          <Text style={styles.text}>PROFIL</Text>
        </View>
        <View style={styles.cell}>
          <Image source={require('../images/Marker.png')} style={styles.image}/>
          <Text style={styles.text}>SUIVI</Text>
        </View>
        <View style={styles.cell}>
          <Image source={require('../images/Book.png')} style={styles.image}/>
          <Text style={styles.text}>CARNET</Text>
        </View>
        <View style={styles.cell}>
          <Image source={require('../images/Loop.png')} style={styles.image}/>
          <Text style={styles.text}>SERVICES</Text>
        </View>
        <View style={styles.line}/>
        <View style={styles.cell}>
          <Text style={styles.text}>PARAMÈTRES</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>AIDE</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>DÉCONNEXION</Text>
        </View>

      </View>
    )
  }
}

export default SideMenu