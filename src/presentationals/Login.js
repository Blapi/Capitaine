import React, { Component } from 'react'
import {Text, View, Image, TextInput, TouchableHighlight, TouchableOpacity, ToastAndroid} from 'react-native'
import {Actions, ActionConst} from 'react-native-router-flux'
import Button from 'react-native-button'
import Spinner from 'react-native-loading-spinner-overlay'
import WrappedTextInput from './WrappedTextInput'

const styles = {
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
    marginTop: 54
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
  }
}

class Login extends Component {
  constructor() {
    super()
    this.state = {user: '', password: '', submitted: false }
  }

  componentDidUpdate() {
    if (this.state.submitted && this.props.requesting === false) {
      if (this.props.tokens && this.props.tokens.access_token) {
        this.setState({submitted: false})
        Actions.drawer({type: ActionConst.RESET})
      } else {
        this.setState({submitted: false})
        ToastAndroid.show(`Nom d'utilisateur ou mot de passe eronnés`, ToastAndroid.SHORT)
      }
    }
  }

  handleUserChange = (event) => {
    this.setState({user: event})
  }

  handlePasswordChange = (event) => {
    this.setState({password: event})
  }

  handlePress = () => {
    if (!this.state.user || !this.state.password) {
      ToastAndroid.show('Remplissez tous les champs SVP', ToastAndroid.SHORT)
    } else {
      this.props.getTokenWithNoRefresh(this.state.user, this.state.password)
      this.setState({submitted: true})
    }
  }
  
  // Text input surrounded by Views to override border color smh.
  render() {
    return (
      <Image
        source={require('../images/Background.jpg')}
        style={styles.background_img}
        resizeMode='cover'>
        {this.props.requesting
        ? <View style={styles.main}>
          <Spinner visible={true}/>
        </View>
        : <View style={styles.container}>
            <WrappedTextInput
              placeholder={`Nom d'utilisateur`}
              onChangeText={this.handleUserChange}
              value={this.state.user} />
            <WrappedTextInput
              placeholder='Mot de passe'
              onChangeText={this.handlePasswordChange}
              value={this.state.password}
              secureTextEntry={true}
              style={{marginTop: 10}} />
            <Button
              containerStyle={[styles.btn_login]}
              style={styles.btn_text}
              onPress={this.handlePress}>
              CONNEXION
            </Button>
            <TouchableHighlight style={{marginTop:30}}
                onPress={(this.handlePress)}>
              <Text style={{color: 'white'}}>Mot de passe oublié ?</Text>
            </TouchableHighlight>
            <View style={{flex:1}}/>
            <Text style={{color: 'white', fontFamily: '5thgradecursive-2-italic'}}>Capitaine</Text>
          </View>
        }
      </Image>
    )
  }
}

export default Login
