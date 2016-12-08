import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux'

import Button from 'react-native-button';
import WrappedTextInput from './WrappedTextInput'

var login = 'S\'identifier'.toUpperCase();

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
  }
  
  // Text input surrounded by Views to override border color smh.
  render() {
    return (
      <Image source={require('../images/Background.jpg')} style={styles.background_img} resizeMode='cover'>
        <View style={styles.container}>
          <WrappedTextInput placeholder={'Nom d\'utilisateur'} onChangeText={(user) => this.setState({user})} />
          <WrappedTextInput placeholder={'Mot de passe'}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}
            style={{marginTop: 10}} />
          <Button
            containerStyle={[styles.btn_login]}
            style={styles.btn_text}
            onPress={this.handlePress.bind(this)}>
            {'Connexion'.toUpperCase()}
          </Button>
          <TouchableHighlight style={{marginTop:30}}
              onPress={this.handlePress.bind(this)}>
            <Text style={{color: 'white'}}>Mot de passse oublié ?</Text>
          </TouchableHighlight>
          <View style={{flex:1}}/>
          <Text style={{color: 'white', fontFamily: '5thgradecursive-2'}}>Capitaine</Text>
        </View>
      </Image>
    );
  }
  
  handlePress() {
    Actions.drawer();
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