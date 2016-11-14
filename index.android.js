/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import Navigation from './android/js/presentational/navigation'

/**
 * Database
 */

const flights = [
  {
    "id": 256,
    "date": "2013-11-29",
    "plane": 1,
    "role": "EP",
    "flight_type": "Local - LFQO",
    "flight_time": 50,
    "flight_time_single_engine_day_alone": 0,
    "flight_time_single_engine_day_double": 50,
    "day_landing": 0,
    "plane_hour_price": 139.8,
    "instructor_hour_price": 39.9
  },
  {
    "id": 257,
    "date": "2013-12-01",
    "plane": 1,
    "role": "P",
    "flight_type": "Local - LFQO",
    "flight_time": 60,
    "flight_time_single_engine_day_alone": 0,
    "flight_time_single_engine_day_double": 60,
    "day_landing": 1,
    "plane_hour_price": 139.8,
    "instructor_hour_price": 39.9
  },
  {
    "id": 258,
    "date": "2015-01-31",
    "plane": 2,
    "role": "EP",
    "flight_type": "Local",
    "flight_time": 100,
    "flight_time_single_engine_day_alone": 0,
    "flight_time_single_engine_day_double": 100,
    "day_landing": 4,
    "plane_hour_price": 139.8,
    "instructor_hour_price": 39.9
  },
  {
    "id": 259,
    "date": "2015-01-26",
    "plane": 1,
    "role": "P",
    "flight_type": "NAV",
    "flight_time": 60,
    "flight_time_single_engine_day_alone": 0,
    "flight_time_single_engine_day_double": 60,
    "day_landing": 1,
    "plane_hour_price": 139.8,
    "instructor_hour_price": 39.9
  },
  {
    "id": 260,
    "date": "2015-09-25",
    "plane": 1,
    "role": "EP",
    "flight_type": "NAV",
    "flight_time": 90,
    "flight_time_single_engine_day_alone": 0,
    "flight_time_single_engine_day_double": 90,
    "day_landing": 2,
    "plane_hour_price": 139.8,
    "instructor_hour_price": 39.9
  },
  {
    "id": 261,
    "date": "2016-04-26",
    "plane": 2,
    "role": "P",
    "flight_type": "Local",
    "flight_time": 45,
    "flight_time_single_engine_day_alone": 0,
    "flight_time_single_engine_day_double": 45,
    "day_landing": 6,
    "plane_hour_price": 139.8,
    "instructor_hour_price": 39.9
  },
]

const planes = [
  {
    "id": 1,
    "type": {
        "id": 1,
        "brand": "ROBIN",
        "type": "DR400-120"
    },
    "registration": "F-GOVX",
    "general_color": "ffdd3b",
    "text_color": "696969"
  },
  {
    "id": 2,
    "type": {
        "id": 1,
        "brand": "ROBIN",
        "type": "DR400-120"
    },
    "registration": "F-GTPS",
    "general_color": "2481ba",
    "text_color": "FFFFFF"
  }
]

const airfields = [
  {
    "code": "LFOI",
    "name": "Abbeville",
    "latitude": 50.1431,
    "longitude": 1.8325
  },
  {
    "code": "LFBA",
    "name": "Agen La Garenne",
    "latitude": 44.1747,
    "longitude": 0.59056
  }
]

/**
 * Styles
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
})

/**
 * Component
 */

export default class Capitaine extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Navigation
          flights={flights}
          planes={planes} />
      </View>
    )
  }
}

AppRegistry.registerComponent('Capitaine', () => Capitaine);
