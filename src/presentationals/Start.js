import React from 'react'
import {Image, ToastAndroid} from 'react-native'
import {Actions, ActionConst} from 'react-native-router-flux'

const styles = {
    background: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 100,
    width: 100
  }
}

class Start extends React.Component {
  constructor() {
    super()
    this.state = { submitted: false }
  }

  componentDidMount() {
    this.props.getTokenWithRefresh()
    this.setState({submitted: true})
  }

  componentDidUpdate() {
    if (this.state.submitted && this.props.requesting === false) {
      if (this.props.tokens && this.props.tokens.access_token) {
        this.setState({submitted: false})
        ToastAndroid.show('Bonjour !', ToastAndroid.SHORT)
        Actions.drawer({type: ActionConst.RESET})
      } else {
        this.setState({submitted: false})
        Actions.welcome({type: ActionConst.RESET})
      }
    }
  }

  render() {
    return (
      <Image source={require('../images/Start_Background.jpg')} style={styles.background}>
        <Image source={require('../images/2017_logo_Capitaine.png')} style={styles.logo} />
      </Image>
    )
  }
}

export default Start
