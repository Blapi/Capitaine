import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import Button from 'react-native-button';

var login = 'S\'identifier'.toUpperCase();

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
  }
  
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#0d3d47', alignItems: 'center'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  
  // Text input surrounded by Views to override border color smh.
  renderScene(route, navigator) {
    return (
      <Image source={require('../img/background.jpg')} style={styles.background_img}>
        <View style={styles.container}>
         <View style={{
              backgroundColor: this.state.text,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              paddingBottom: -10}}>
            <TextInput
              style={{height: 50, borderWidth: 1, color: 'white', borderBottomColor:'transparent'}}
              onChangeText={(user) => this.setState({user})}
              value={this.state.user}
              autoCorrect={false}
              placeholder={'Nom d\'utilisateur'}
              placeholderTextColor={'#ffffffbb'}
              multiline = {true}
              numberOfLines = {1}
              />
        </View>
        <View style={{
              backgroundColor: this.state.text,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              paddingBottom: -10}}>
            <TextInput
              style={{marginTop: 10, height: 50, borderWidth: 1, color: 'white'}}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              autoCorrect={false}
              placeholder={'Mot de passe'}
              placeholderTextColor={'#ffffffbb'}
              secureTextEntry={true}
            />
          </View>
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
          <Text style={{color: 'white', fontFamily: '5thgradecursive'}}>Capitaine</Text>
        </View>
      </Image>
    );
  }
  
  handlePress() {
    this.props.navigator.push({
      id: 'MainPage',
      name: 'MainName',
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    /*if (index === 0) {
      return null;
    } else {*/
      return (
        <TouchableHighlight style={{flex: 1, justifyContent: 'center'}} onPress={() => navigator.pop(0)}>
          <Image source={require('../img/arrow.png')} style={{width: 50, height: 50}}/>
        </TouchableHighlight>
      );
    //}
  },
  
  RightButton(route, navigator, index, navState) {
    return null;
  },

  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          {login}
        </Text>
      </TouchableOpacity>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 30,
    marginTop: 80
  },
  
  background_img: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover'
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