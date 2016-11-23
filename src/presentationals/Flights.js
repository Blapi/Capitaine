import React from 'react'
import {View, Text, Image, TouchableHighlight, ScrollView, ToastAndroid} from 'react-native'
import {vw} from 'react-native-viewport-units'
import moment from 'moment'

const colors = [
  '#0f363a',
  '#000'
]

const flightCell = {
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
}

const styles = {
  scrollView: {
    position: 'relative',
    marginLeft: 2 * vw,
    marginRight: 2 * vw
  },
  flightList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2 * vw,
    borderBottomWidth: 2,
    borderColor: 'lightblue',
    width: 100*vw
  },
  textCell: {
    position: 'relative',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 10
  },
  smallCells: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: (31 * vw),
    height: (31 * vw),
  },
  dateCell: {
    ...flightCell,
    width: (30 * vw),
    height: (30 * vw),
  },
  planeCell: {
    ...flightCell,
    width: (30 * vw),
    height: (30 * vw),
  },
  typeCell: {
    ...flightCell,
    width: (14.5 * vw),
    height: (14.5 * vw),
  },
  roleCell: {
    ...flightCell,
    width: (14.5 * vw),
    height: (14.5 * vw),
  },
  flightTimeCell: {
    ...flightCell,
    width:  (14.5 * vw),
    height: (14.5 * vw),
  },
  landingCell: {
    ...flightCell,
    width: (14.5 * vw),
    height: (14.5 * vw),
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 54
  },
  icon: {
    width: 30,
    height: 30
  }
}

class Flights extends React.Component {
  render() {
    return (
      <Image source={require('../images/Flightbook_Background.jpg')} style={styles.background}>
        {this.props.flights !== undefined && this.props.planes !== undefined
        ?
        <ScrollView style={styles.scrollView} >
        {this.props.flights.slice(0, 8).map((flight, key)=> {
          return (
            <TouchableHighlight
              key={key}
              underlayColor='transparent'
              onPress={() => console.log(flight)}>
              <View style={styles.flightList} >
                <TouchableHighlight
                  onLongPress={() => ToastAndroid.show('Date and Role', ToastAndroid.SHORT)}
                  onPress={() => console.log(flight)}
                  underlayColor='transparent'
                  style={{width:styles.dateCell.width + vw, height:styles.dateCell.height + vw, opacity: 0.8}}>
                  <View style={{...styles.dateCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}}>
                    <Image source={require('../images/Icon_clock.png')} style={styles.icon}/>
                    <Text style={styles.textCell}>{moment(flight.date, 'YYYY-MM-DD').format('DD/MM/YYYY')}</Text>
                    {flight.role === 'EP'
                    ?
                    <Image source={require('../images/Icon_twoUsers.png')} style={styles.icon}/>
                    :
                    <Image source={require('../images/Icon_oneUser.png')} style={styles.icon}/>}
                    <Text style={styles.textCell}>{flight.role}</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onLongPress={() => ToastAndroid.show('Plane informations', ToastAndroid.SHORT)}
                  onPress={() => console.log(flight)}
                  underlayColor='transparent'
                  style={{width:styles.planeCell.width + vw, height:styles.planeCell.height + vw, opacity: 0.8}} >
                  <View style={{...styles.planeCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}}>
                    <Image source={require('../images/Icon_plane.png')} style={styles.icon}/>
                    {this.props.planes.map((plane, key) => {
                      if (plane.id === flight.plane) {
                        return (<Text key={key} style={styles.textCell}>{plane.type.type}{'\n'}{plane.registration}</Text>)
                      }
                    })}
                  </View>
                </TouchableHighlight>
                <View style={styles.smallCells}>
                  <TouchableHighlight
                    onLongPress={() => ToastAndroid.show('Time of the day', ToastAndroid.SHORT)}
                    onPress={() => console.log(flight)}
                    underlayColor='transparent'
                    style={{width:styles.roleCell.width + vw, height:styles.roleCell.height + vw, opacity: 0.8}}>
                    <View style={{...styles.roleCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}}>
                      {flight.day_landing !== undefined
                      ? <Image source={require('../images/Icon_sun.png')} style={styles.icon}/>
                      : <Image source={require('../images/Icon_moon.png')} style={styles.icon}/>}
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onLongPress={() => ToastAndroid.show('Flight duration', ToastAndroid.SHORT)}
                    onPress={() => console.log(flight)}
                    underlayColor='transparent'
                    style={{width:styles.flightTimeCell.width + vw, height:styles.flightTimeCell.height + vw, opacity: 0.8}}>
                    <View style={{...styles.flightTimeCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}}>
                      <Text style={styles.textCell}>
                        {moment.duration(flight.flight_time, 'minutes').hours()}h{moment.duration(flight.flight_time, 'minutes').minutes() == 0
                                                                                  ? moment.duration(flight.flight_time, 'minutes').minutes() + '0'
                                                                                  : (moment.duration(flight.flight_time, 'minutes').minutes() < 10
                                                                                    ? '0' + moment.duration(flight.flight_time, 'minutes').minutes()
                                                                                    : moment.duration(flight.flight_time, 'minutes').minutes())}
                      </Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onLongPress={() => ToastAndroid.show('Type', ToastAndroid.SHORT)}
                    onPress={() => console.log(flight)}
                    underlayColor='transparent'
                    style={{width:styles.typeCell.width + vw, height:styles.typeCell.height + vw, opacity: 0.8}}>
                    <View style={{...styles.typeCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}}>
                      <Text style={styles.textCell}>{flight.flight_type}</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onLongPress={() => ToastAndroid.show('Landing', ToastAndroid.SHORT)}
                    onPress={() => console.log(flight)}
                    underlayColor='transparent'
                    style={{width:styles.landingCell.width + vw, height:styles.landingCell.height + vw, opacity: 0.8}}>
                    <View style={{...styles.landingCell, backgroundColor:colors[key%colors.length], borderColor:colors[key%colors.length]}}>
                      <Text style={styles.textCell}>{flight.day_landing !== undefined ? flight.day_landing : flight.night_landing}</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </TouchableHighlight>)
          })}
        </ScrollView>
        :
        <Text style={{...styles.textCell, fontSize: 30}}>No flights</Text>
        }
      </Image>
    )
  }
}

export default Flights