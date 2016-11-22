import React from 'react'
import {View, Text, Image, TouchableHighlight, ScrollView, ToastAndroid} from 'react-native'
import {vw} from 'react-native-viewport-units'

const colors = [
  '#0f363a',
  '#000'
]

const flightCell = {
  margin: 5,
  borderStyle: 'solid',
  borderWidth: 2,
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 60
}

const styles = {
  scrollView: {
    position: 'relative',
    marginLeft: 5,
    marginRight: 5
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
  background: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 54
  }
}

class Flights extends React.Component {
  render() {
    return (
      <Image source={require('../images/Flightbook_Background.jpg')} style={styles.background}>
        <ScrollView style={styles.scrollView} >
        {this.props.flights.map((flight, key) => {
          return (
            <TouchableHighlight
              key={key}
              underlayColor='transparent'
              onPress={() => console.log(flight)}>
              <View style={styles.flightList} >
                <TouchableHighlight
                  onLongPress={() => ToastAndroid.show('Date', ToastAndroid.SHORT)}
                  onPress={() => console.log(flight)}
                  underlayColor='transparent'
                  style={{width:styles.dateCell.width + 10, height:styles.dateCell.height + 10}}>
                  <View style={{...styles.dateCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}}>
                    <Text style={styles.textCell}>{flight.date}</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onLongPress={() => ToastAndroid.show('Plane informations', ToastAndroid.SHORT)}
                  onPress={() => console.log(flight)}
                  underlayColor='transparent'
                  style={{width:styles.dateCell.width + 10, height:styles.dateCell.height + 10}} >
                  <View style={{...styles.planeCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}}>
                    {this.props.planes.map((plane, key) => {
                      if (plane.id === flight.plane) {
                        return (<Text key={key} style={styles.textCell}>{plane.type.type}{'\n\n'}{plane.registration}</Text>)
                      }
                    })}
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onLongPress={() => ToastAndroid.show('Type', ToastAndroid.SHORT)}
                  onPress={() => console.log(flight)}
                  underlayColor='transparent'
                  style={{width:styles.typeCell.width + 10, height:styles.typeCell.height + 10}}>
                  <View style={{...styles.typeCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}}>
                    <Text style={styles.textCell}>{flight.flight_type}</Text>
                  </View>
                </TouchableHighlight>
                <View style={styles.smallCells}>
                  <TouchableHighlight
                    onLongPress={() => ToastAndroid.show('Role', ToastAndroid.SHORT)}
                    onPress={() => console.log(flight)}
                    underlayColor='transparent'
                    style={{width:styles.roleCell.width + 10, height:styles.roleCell.height + 10}}>
                    <View style={{...styles.roleCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}}>
                      <Text style={styles.textCell}>{flight.role}</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onLongPress={() => ToastAndroid.show('Flight time (mins)', ToastAndroid.SHORT)}
                    onPress={() => console.log(flight)}
                    underlayColor='transparent'
                    style={{width:styles.flightTimeCell.width + 10, height:styles.flightTimeCell.height + 10}}>
                    <View style={{...styles.flightTimeCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}}>
                      <Text style={styles.textCell}>{flight.flight_time}</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onLongPress={() => ToastAndroid.show('Landing', ToastAndroid.SHORT)}
                    onPress={() => console.log(flight)}
                    underlayColor='transparent'
                    style={{width:styles.landingCell.width + 10, height:styles.landingCell.height + 10}}>
                    <View style={{...styles.landingCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}}>
                      <Text style={styles.textCell}>{flight.day_landing}</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </TouchableHighlight>)
          })}
        </ScrollView>
      </Image>
    )
  }
}

export default Flights