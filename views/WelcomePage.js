import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';

import Button from 'react-native-button';

var login = ('S\'Identifier').toUpperCase();
var signup = ('Créer un compte').toUpperCase();

class WelcomePage extends Component {
  /* Use this for SplashScreen
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'LoginPage',
      });
    }, 1000);
  }*/

  render() {
    return (
      <Navigator renderScene={this.renderScene.bind(this)} />
    );
  }
  
  renderScene() {
    return (
      <Image source={require('../img/background.jpg')} style={styles.background_img}>
        <View style={styles.container}>
        <Image source={require('../img/logo.png')} style={styles.logo_img}/>
          <Text style={{color: 'white', fontSize: 32, flex: 1}}>Capitaine</Text>
          <Button
            containerStyle={[styles.btn, styles.btn_signup]}
            style={styles.btn_text}
            onPress={this.handlePress.bind(this)}>
            {signup}
          </Button>
          <Button
            containerStyle={[styles.btn, styles.btn_login]}
            style={styles.btn_text}
            onPress={this.handlePress.bind(this)}>
            {login}
          </Button>
        </View>
      </Image>
    );
  }

  handlePress(event) {
    this.props.navigator.push({
      id: 'LoginPage',
      name: 'Login',
    });
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
    resizeMode: 'cover'
  },
  
  logo_img: {
    flex: 1,
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  
  btn_text: {
    color: 'white',
    fontSize: 16
  },
  
  btn: {
    padding: 20,
    backgroundColor: 'black',
    alignSelf: 'stretch'
  },
  
  btn_login:{
    backgroundColor: '#0d3d47',
  },
  
  btn_signup:{
    backgroundColor: '#75bec6',
  }
});

module.exports = WelcomePage;