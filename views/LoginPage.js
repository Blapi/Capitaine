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

var login = 'S\'identifier'.toUpperCase()

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { user: 'Nom d\'utilisateur', password: 'Mot de passe' };
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
  
  renderScene(route, navigator) {
    return (
      <Image source={require('../img/background.jpg')} style={styles.background_img}>
        <View style={styles.container}>
          <TextInput
            style={{height: 40, borderColor: 'white', borderWidth: 1, color: 'white'}}
            onChangeText={(user) => this.setState({user})}
            value={this.state.user}
          />
          <TextInput
            style={{height: 40, borderColor: 'white', borderWidth: 1, color: 'white'}}
            onChangeText={(text) => this.setState({password})}
            value={this.state.password}
          />
          <Button
            containerStyle={[styles.btn_login]}
            style={styles.btn_text}
            onPress={this.handlePress.bind(this)}>
            {'Connexion'.toUpperCase()}
          </Button>
          <TouchableHighlight
              onPress={this.handlePress.bind(this)}>
            <Text style={{color: 'white', marginTop: 30}}>Mot de passse oublié ?</Text>
          </TouchableHighlight>
          <Text style={{color: 'white'}}>Capitaine</Text>
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
        <TouchableHighlight style={{flex: 1, justifyContent: 'center'}} onPress={() => navigator.pop()}>
          <Text style={{color: 'white', fontSize: 16}}>
            {'<-'}
          </Text>
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
    padding: 20,
    backgroundColor: '#75bec6',
    alignSelf: 'stretch',
    marginTop: 40
  },
});

module.exports = LoginPage;