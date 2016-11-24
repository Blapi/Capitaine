import React from 'react'
import {View, Text, Image, TouchableHighlight, ToastAndroid} from 'react-native'
import {vh, vw} from 'react-native-viewport-units'

const styles = {
  background: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 54
  },
  icon: {
    marginTop: 30,
    marginBottom: 20,
    width: 64,
    height: 64
  },
  infosView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  shareView: {
    marginTop: 15
  },
  text: {
    position: 'relative',
    color: 'white',
    fontSize: 12
  },
  highlight: {
    marginTop: 5
  },
  share: {
    width: 30 * vw,
    height: 5 * vh,
    resizeMode: 'contain'
  }
}

class Tracking extends React.Component {
  render() {
    return (
      <Image source={require('../images/Tracking_Background.jpg')} style={styles.background}>
        <Image source={require('../images/Marker.png')} style={styles.icon}/>
        <View style={styles.infosView}>
          <Text style={styles.text}>VOUS ÊTES À user.city, user.country</Text>
          <Text style={styles.text}>LAT. user.latitude</Text>
          <Text style={styles.text}>LONG. user.longitude</Text>
        </View>
        <Image source={require('../images/Share.png')} style={styles.icon}/>
        <Text style={styles.text}>PARTAGEZ VOTRE PARCOURS EN DIRECT SUR</Text>
        <View style={styles.shareView}>
          <TouchableHighlight
            underlayColor='transparent'
            style={styles.highlight}
            onPress={() => ToastAndroid.show('Shared on facebook', ToastAndroid.SHORT)}>
            <Image source={require('../images/share_fb.png')} style={styles.share}/>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor='transparent'
            style={styles.highlight}
            onPress={() => ToastAndroid.show('Shared on twitter', ToastAndroid.SHORT)}>
            <Image source={require('../images/share_twitter.png')} style={styles.share}/>
          </TouchableHighlight>
        </View>
      </Image>
    )
  }
}

export default Tracking