import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';

import Button from 'react-native-button';
import WrappedTextInput from './WrappedTextInput';

var signup = 'S\'Inscrire'.toUpperCase();
var spacing = 10;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '', rep_password: '' };
  }
    
  render() {
    return (
      <Image source={require('../images/Background.jpg')} style={styles.background_img} resizeMode='cover'>
        <View style={styles.container}>
          <WrappedTextInput placeholder={'Nom d\'utilisateur'} onChangeText={(user) => this.setState({user})} />
          <WrappedTextInput placeholder={'E-Mail'} style={{marginTop: spacing}} />
          <WrappedTextInput placeholder={'Mot de passe'} style={{marginTop: spacing}}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true} />
          <WrappedTextInput placeholder={'Répéter le mot de passe'} style={{marginTop: spacing}}
            onChangeText={(rep_password) => this.setState({rep_password})}
            secureTextEntry={true} />
          <Button
            containerStyle={[styles.btn_login]}
            style={styles.btn_text}
            onPress={this.handlePress.bind(this)}>
            {signup}
          </Button>
          <View style={{flex:1}}/>
          <Text style={{color: 'white', fontFamily: '5thgradecursive-2'}}>Capitaine</Text>
        </View>
      </Image>
    );
  }
  
  handlePress() {
    if (this.state.password != this.state.rep_password) {
      ToastAndroid.show('Les mots de passes ne correspondent pas.', ToastAndroid.SHORT);      
    } else {
      ToastAndroid.show('Compte créé!', ToastAndroid.SHORT); 
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    padding: 30,
    marginTop: 80
  },
  
  background_img: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  
  btn_text: {
    color: 'white',
    fontSize: 16
  },
  
  btn_login: {
    padding: 15,
    backgroundColor: '#75bec6',
    alignSelf: 'stretch',
    marginTop: 40
  },
});

module.exports = LoginPage;