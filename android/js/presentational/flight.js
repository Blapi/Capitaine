 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';
import Button from 'react-native-button'

const styles = StyleSheet.create({
  mainView: {
    position: 'relative',
    top: 75,
    left: 0,
    right: 0,
  },
  detailsText: {
    marginLeft: 20,
    fontSize: 16,
  },
})

export default class Flight extends Component {
  render() {
    const price = Math.round((this.props.flight.plane_hour_price * (this.props.flight.flight_time / 60) * 10)) / 10

    return (
      <View style={styles.mainView} >
        <Text style={styles.detailsText} >
          Price per hour : {this.props.flight.plane_hour_price}€
        </Text>
        <Text style={styles.detailsText} >
          Flying time : {this.props.flight.flight_time}
        </Text>
        <Text style={styles.detailsText} >
          Total price : {price}€
        </Text>
      </View>
    )
  }
}