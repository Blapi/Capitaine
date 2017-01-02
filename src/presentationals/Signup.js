import React, { Component } from 'react'
import {Text, View, Image, TextInput, TouchableHighlight, TouchableOpacity, ToastAndroid} from 'react-native'
import {Actions, ActionConst} from 'react-native-router-flux'
import Button from 'react-native-button'
import WrappedTextInput from './WrappedTextInput'
import Spinner from 'react-native-loading-spinner-overlay'

const spacing = 10

const styles = {
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
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

class Signup extends Component {
  constructor() {
    super()
    this.state = { user: '', mail: '', password: '', rep_password: '', submitted: false }
  }

  componentDidUpdate() {
    if (this.state.submitted && this.props.requesting === false) {
      if (this.props.tokens && this.props.tokens.access_token) {
        this.setState({submitted: false})
        ToastAndroid.show('Compte créé!', ToastAndroid.SHORT)
        Actions.drawer({type: ActionConst.RESET})
      } else {
        this.setState({submitted: false})
        ToastAndroid.show(`Erreur lors de la création de profil`, ToastAndroid.SHORT)
      }
    }
  }

  handleUserChange = (event) => {
    this.setState({user: event})
  }

  handleMailChange = (event) => {
    this.setState({mail: event})
  }

  handlePasswordChange = (event) => {
    this.setState({password: event})
  }

  handleRepPasswordChange = (event) => {
    this.setState({rep_password: event})
  }

  handlePress = () => {
    if (!this.state.user || !this.state.mail || !this.state.password || !this.state.rep_password) {
      ToastAndroid.show('Remplissez tous les champs SVP', ToastAndroid.SHORT)
    } else if (this.state.password !== this.state.rep_password) {
      ToastAndroid.show('Les mots de passe ne correspondent pas', ToastAndroid.SHORT)
    } else {
      this.props.addUser(this.state.user, this.state.password, this.state.mail)
      this.setState({submitted: true})
    }
  }
    
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
              placeholder='E-Mail'
              onChangeText={this.handleMailChange}
              style={{marginTop: spacing}}
              value={this.state.mail} />
            <WrappedTextInput
              placeholder='Mot de passe'
              onChangeText={this.handlePasswordChange}
              style={{marginTop: spacing}}
              value={this.state.password}
              secureTextEntry />
            <WrappedTextInput
              placeholder='Répéter le mot de passe'
              onChangeText={this.handleRepPasswordChange}
              style={{marginTop: spacing}}
              value={this.state.rep_password}
              secureTextEntry />
            <Button
              containerStyle={styles.btn_login}
              style={styles.btn_text}
              onPress={this.handlePress}>
              S'INSCRIRE
            </Button>
            <View style={{flex:1}}/>
            <Text style={{color: 'white', fontFamily: '5thgradecursive-2-italic'}}>Capitaine</Text>
          </View>
        }
      </Image>
    )
  }
}

export default Signup