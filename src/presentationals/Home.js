import React from 'react'
import {View} from 'react-native'
import DataContainer from '../containers/DataContainer'

const styles = {
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  }
}

class Home extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <DataContainer />
      </View>
    )
  }
}

export default Home
