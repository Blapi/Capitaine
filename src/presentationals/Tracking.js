import React from 'react'
import {View, Text, Image, TouchableHighlight, ScrollView, ToastAndroid} from 'react-native'
import {vw} from 'react-native-viewport-units'
import moment from 'moment'

const styles = {

  background: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 54
  }
}

class Tracking extends React.Component {
  render() {
    return (
      <Image source={require('../images/Tracking_Background.jpg')} style={styles.background}>

      </Image>
    )
  }
}

export default Tracking