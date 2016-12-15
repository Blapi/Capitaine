import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import {Actions} from 'react-native-router-flux'

import Button from 'react-native-button';
import Carousel from 'react-native-looped-carousel';

var login = ('S\'Identifier').toUpperCase();
var signup = ('Créer un compte').toUpperCase();

// Carousel defaults to full screen
const { width, height } = Dimensions.get('window');

class Welcome extends Component {
   constructor(props) {
    super(props);

    this.state = {
      size: { width , height },
    };
  }

   _onLayoutDidChange(event) {
    const layout = event.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  /* TODO: Margin top & bottom on the carousel view were made for nexus 6P, should be adaptive */
  render() {
    return (
      <Image source={require('../images/Background.jpg')} style={styles.background_img} resizeMode='cover'>
        <View style={styles.container}>
          <Image source={require('../images/2017_logo_Capitaine.png')} style={styles.logo_img} />
          <Text style={styles.title}>Capitaine</Text>
          <View style={{flex:1, marginBottom: 80, marginTop: 50}} onLayout={(e) => this._onLayoutDidChange(e)}>
            <Carousel
              delay={3000}
              style={this.state.size}
              bullets={true}
              autoplay>
            <View style={[styles.carousel, this.state.size]}>
              <Text style={[styles.carousel_title]}>PRÉPAREZ</Text>
              <Text style={[styles.carousel_txt]} numberOfLines={5}>Préparez votre vol décontracté en consultant votre trajet prédéfinit et la météo actuelle en directe</Text>
            </View>
            <View style={[styles.carousel, this.state.size]}>
              <Text style={[styles.carousel_title]}>VOLEZ</Text>
              <Text style={[styles.carousel_txt]}>Enregistrez vos conversations, partagez votre trajet et servez-vous des services aéronautiques à votre disposition</Text>
            </View>
            <View style={[styles.carousel, this.state.size]}>
              <Text style={[styles.carousel_title]}>ATTERRISSEZ</Text>
              <Text style={[styles.carousel_txt]}>Atterrissez léger et remplissez votre carnet de vol avec simplicité</Text>
            </View>
          </Carousel>
        </View>
        <Button
          containerStyle={[styles.btn, styles.btn_signup]}
          style={styles.btn_text}
          onPress={this.handleSignupPress.bind(this)}>
          {signup}
        </Button>
        <Button
          containerStyle={[styles.btn, styles.btn_login]}
          style={styles.btn_text}
          onPress={this.handleLoginPress.bind(this)}>
          {login}
        </Button>
      </View>
    </Image>
    );
  }

  handleLoginPress(event) {
    Actions.login();
  }
  
  handleSignupPress(event) {
    Actions.signup();
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
  },
  
  logo_img: {
    marginTop: 30,
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  
  title: {
    fontFamily: '5thgradecursive-2',
    color: 'white',
    fontSize: 17,
    marginTop: 10,
    paddingRight: 10
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
  },
  
  carousel: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  carousel_title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  
  carousel_txt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    //flexWrap: 'wrap'
  },
});

module.exports = Welcome;