/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component}  from 'react';
import {Text, Navigator, StyleSheet} from 'react-native';
import Button from 'react-native-button'
import Flights from './flights'
import Flight from './flight'

const styles = StyleSheet.create({
  mainView: {
    position: 'relative',
  },
  backButton: {
    backgroundColor: 'lightblue',
    color: 'black',
    height: 50,
    textAlignVertical: 'center',
  },
  editButton: {
    backgroundColor: 'lightblue',
    color: 'black',
    height: 50,
    textAlignVertical: 'center',
  },
  titlePage: {
    color: 'black',
    height: 50,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
})

export default class Navigation extends Component {
  render() {
    const routes = [
      {title: 'FlightBook', index: 0},
      {title: 'Flight', index: 1},
    ]
    return (
      <Navigator
        style={styles.mainView}
        initialRoute={routes[0]}
        renderScene={(route, navigator) => {
          switch (route.title) {
            case 'FlightBook':
              return <Flights
                        flights={this.props.flights}
                        planes={this.props.planes}
                        navigator={navigator} />
            case 'Flight':
              return <Flight {...route.passProps} />
            default:
              return null
          }
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => {
                if (route.index === 0) {
                  return null;
                } else  {
                  return (
                    <Button
                      style={styles.backButton}
                      onPress={() => navigator.pop()}>
                      Back
                    </Button>
                  )
                }
              },
              RightButton: (route, navigator, index, navState) => {
                if (route.index === 0) {
                  return (
                    <Button style={styles.editButton}>
                      Edit mode
                    </Button>)
                } else {
                  return null;
                }
              },
              Title: (route, navigator, index, navState) => {
              return (
                <Text style={styles.titlePage}>
                  {route.title}
                </Text>
                )
              },
            }}
            style={{backgroundColor: 'lightblue'}}
          />
        }
      />
    )
  }
}