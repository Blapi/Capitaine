import React from 'react'
import {Image} from 'react-native'
import MenuContainer from '../containers/MenuContainer'

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
        <MenuContainer />
      </Image>
    )
  }
}

export default Home
