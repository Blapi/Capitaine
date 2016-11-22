import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
} from 'react-native';

class SplashPage extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'WelcomePage', // Bypass this if already connected
      });
    }, 2000);
  }

  render() {
    return (
      <Image source={require('../img/background_splash.jpg')} style={styles.background_img}>
        <Image source={require('../img/logo.png')} style={styles.logo_img}/>
      </Image>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
   },
  
  background_img: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  logo_img: {
    width: 80,
    height: 80,
    resizeMode: 'contain'
  }
});

module.exports = SplashPage;