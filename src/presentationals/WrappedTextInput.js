import React from 'react'
import {View, TextInput} from 'react-native'

class WrappedTextInput extends React.Component {
  render() {
    return (
      <View style={{borderBottomColor: 'white', borderBottomWidth: 1, paddingBottom: -10, alignSelf: 'stretch'}}>
        <TextInput
          style={{...this.props.style, height: 50, color: 'white', borderBottomColor: 'transparent'}}
          onChangeText={this.props.onChangeText}
          autoCorrect={false}
          underlineColorAndroid='transparent'
          placeholder={this.props.placeholder}
          placeholderTextColor={'#ffffffbb'}
          secureTextEntry={this.props.secureTextEntry}
          value={this.props.value} />
      </View>
    )
  }
}

export default WrappedTextInput
