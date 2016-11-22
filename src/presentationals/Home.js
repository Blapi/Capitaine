import React from 'react'
import {Image} from 'react-native'
import DataContainer from '../containers/DataContainer'

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

class Home extends React.Component {
  render() {
    return (
      <Image source={require('../images/Background.jpg')} style={styles.background}>
        <DataContainer />
      </Image>
    )
  }
}

export default Home
