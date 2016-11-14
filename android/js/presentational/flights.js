 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView, TouchableHighlight, ToastAndroid} from 'react-native'
import {vw} from 'react-native-viewport-units'
import Button from 'react-native-button'
import Navigation from './navigation'

const colors = [
  'green',
  'blue',
  'red',
  'gray',
  'yellow',
]

const flightCell = {
  margin: 5,
  borderStyle: 'solid',
  borderWidth: 2,
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: 'blue',
  backgroundColor: 'blue',
}

const styles = {
  scrollView: {
    position: 'relative',
    top : 55,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 40,
  },
  flightList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    borderBottomWidth: 2,
    borderColor: 'lightblue',
    width: 100*vw
  },
  textCell: {
    position: 'relative',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
  },
  smallCells: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: ((100 * vw) / 5) + 10,
    height: ((100 * vw) / 5) + 10,
  },
  dateCell: {
    ...flightCell,
    width: ((100 * vw) / 5) + 5,
    height: ((100 * vw) / 5) + 5,
  },
  planeCell: {
    ...flightCell,
    width: ((100 * vw) / 5) + 5,
    height: ((100 * vw) / 5) + 5,
  },
  typeCell: {
    ...flightCell,
    width: ((100 * vw) / 5) + 5,
    height: ((100 * vw) / 5) + 5,
  },
  roleCell: {
    ...flightCell,
    width: ((100 * vw) / 10) - 5,
    height: ((100 * vw) / 10) - 5,
  },
  flightTimeCell: {
    ...flightCell,
    width:  ((100 * vw) / 10) - 5,
    height: ((100 * vw) / 10) - 5,
  },
  landingCell: {
    ...flightCell,
    width: ((100 * vw) / 10) - 5,
    height: ((100 * vw) / 10) - 5,
  },
}

export default class Flights extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView} >
      {this.props.flights.map((flight, key) => {
        return (<TouchableHighlight
                  key={key}
                  underlayColor='transparent'
                  onPress={() => this.props.navigator.push({title: 'Flight', passProps: {flight: flight}})}>
          <View style={styles.flightList} >
            <TouchableHighlight
              onLongPress={() => ToastAndroid.show('Date', ToastAndroid.SHORT)}
              onPress={() => this.props.navigator.push({title: 'Flight', passProps: {flight: flight}})}
              underlayColor='transparent'
              style={{width:styles.dateCell.width + 10, height:styles.dateCell.height + 10}} >
              <View style={{...styles.dateCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}} >
                <Text style={styles.textCell} >
                  {flight.date}
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onLongPress={() => ToastAndroid.show('Plane informations', ToastAndroid.SHORT)}
              onPress={() => this.props.navigator.push({title: 'Flight', passProps: {flight: flight}})}
              underlayColor='transparent'
              style={{width:styles.dateCell.width + 10, height:styles.dateCell.height + 10}} >
              <View style={{...styles.planeCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}} >
                {this.props.planes.map((plane, key) => {
                  if (plane.id === flight.plane) {
                    return (<Text
                              key={key}
                              style={styles.textCell} >
                      {plane.type.type}{'\n\n'}{plane.registration}
                    </Text>)
                  }
                })}
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onLongPress={() => ToastAndroid.show('Type', ToastAndroid.SHORT)}
              onPress={() => this.props.navigator.push({title: 'Flight', passProps: {flight: flight}})}
              underlayColor='transparent'
              style={{width:styles.typeCell.width + 10, height:styles.typeCell.height + 10}} >
              <View style={{...styles.typeCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}} >
                <Text style={styles.textCell} >
                  {flight.flight_type}
                </Text>
              </View>
            </TouchableHighlight>
            <View style={styles.smallCells} >
              <TouchableHighlight
                onLongPress={() => ToastAndroid.show('Role', ToastAndroid.SHORT)}
                onPress={() => this.props.navigator.push({title: 'Flight', passProps: {flight: flight}})}
                underlayColor='transparent'
                style={{width:styles.roleCell.width + 10, height:styles.roleCell.height + 10}} >
                <View style={{...styles.roleCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}} >
                  <Text style={styles.textCell} >
                    {flight.role}
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onLongPress={() => ToastAndroid.show('Flight time (mins)', ToastAndroid.SHORT)}
                onPress={() => this.props.navigator.push({title: 'Flight', passProps: {flight: flight}})}
                underlayColor='transparent'
                style={{width:styles.flightTimeCell.width + 10, height:styles.flightTimeCell.height + 10}} >
                <View style={{...styles.flightTimeCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}} >
                  <Text style={styles.textCell} >
                    {flight.flight_time}
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onLongPress={() => ToastAndroid.show('Landing', ToastAndroid.SHORT)}
                onPress={() => this.props.navigator.push({title: 'Flight', passProps: {flight: flight}})}
                underlayColor='transparent'
                style={{width:styles.landingCell.width + 10, height:styles.landingCell.height + 10}} >
                <View style={{...styles.landingCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}} >
                  <Text style={styles.textCell} >
                    {flight.day_landing}
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </TouchableHighlight>)
      })}
      </ScrollView>
    )
  }
}