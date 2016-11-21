import {TouchableOpacity, Text, View} from 'react-native'
import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import {vw, vh} from 'react-native-viewport-units'

const styles = {
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(181,198,255,1)",
  },
  spinner: {
    marginBottom: 50
  }
}

class Menu extends React.Component {
  componentWillMount() {
    this.props.getData()
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <View style={styles.main}>
        {this.props.requesting
        ?
        <Spinner visible={true}/>
        :
        <Text>Yo Test</Text>}
      </View>
    )
  }
}

export default Menu