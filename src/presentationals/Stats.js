import React from 'react'
import {View, ScrollView, Text, Image, TouchableHighlight, Modal} from 'react-native'
import {vw, vh} from 'react-native-viewport-units'
import moment from 'moment'
import ModalPicker from 'react-native-modal-picker'
import Spinner from 'react-native-loading-spinner-overlay'
import {easyFetch, jsonFetch} from '../utils/easyFetch'

const styles = {
  background: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 54
  },
  mainView: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    paddingLeft: 5 * vw,
    paddingRight: 5 * vw
  },
  modalView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
    opacity: 0.9
  },
  dataView: {
    marginTop: 3 * vh,
    backgroundColor: '#000',
    height: 10 * vh,
    width: 90 * vw,
    opacity: 0.6,
    flexDirection: 'column'
  },
  hightlightView: {
    marginTop: 3 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 8 * vh,
    width: 90 * vw,
  },
  backView: {
    height: 8 * vh,
    width: 40 * vw,
    resizeMode: 'contain'
  },
  highlight: {
    opacity: 0.8
  },
  title: {
    marginTop: vh,
    marginLeft: vh,
    color: 'white',
    fontFamily: 'calibril',
    fontSize: 14,
    fontWeight: 'bold'
  },
  text: {
    marginTop: vh,
    marginLeft: vh,
    color: 'white',
    fontFamily: 'calibril',
    fontSize: 10
  },
  highlightText: {
    color: 'white',
    fontFamily: 'calibril',
    fontSize: 14
  },
  textCell: {
    color: 'white',
    fontFamily: 'calibril',
    textAlign: 'center',
    fontSize: 10
  },
  row: {
    margin: 0,
    padding: 0,
    flexDirection: 'row',
  },
  cell: {
    margin: 0,
    width: 22.5*vw,
    height: 15*vw,
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  topCell: {
    borderTopWidth: 1,
    borderTopColor: 'white'
  },
  leftCell: {
    borderLeftWidth: 1,
    borderLeftColor: 'white'
  },
  rightCell: {
    borderRightWidth: 1,
    borderRightColor: 'white'
  },
  bottomCell: {
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  },
}

class Stats extends React.Component {
  constructor() {
    super()
    this.state = {
      modalTimeVisible: false,
      modalNumberVisible: false
    }
  }

  setModalTimeVisible(visible) {
    this.setState({modalTimeVisible: visible})
  }

  setModalNumberVisible(visible) {
    this.setState({modalNumberVisible: visible})
  }

  render() {
    return (
      <Image
        source={require('../images/Flightbook_Background.jpg')}
        style={styles.background}>
        <View style={styles.mainView}>
          <Modal
            animationType={'fade'}
            transparent={true}
            visible={this.state.modalTimeVisible}
            onRequestClose={() => {this.setModalTimeVisible(!this.state.modalTimeVisible)}}>
            <View style={styles.modalView}>
              <Text style={styles.title}>STATISTIQUES DE TEMPS DE VOL</Text>
              <View style={{...styles.mainView, justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.row}>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.leftCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      Type
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      Temps de vol au total
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      Temps de vol en double commande
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      Temps de vol en commandant de bord
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.leftCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      Depuis le premier vol
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.total_flight_time} minutes
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.total_flight_time_alone} minutes
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.total_flight_time_double} minutes
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.leftCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      Ces 3 derniers mois
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.last_3m_flight_time} minutes
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.last_3m_flight_time_alone} minutes
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.last_3m_flight_time_double} minutes
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.leftCell, ...styles.rightCell, ...styles.bottomCell}}>
                    <Text style={styles.textCell}>
                      Dans la dernière année
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell, ...styles.bottomCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.last_year_flight_time} minutes
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell, ...styles.bottomCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.last_year_flight_time_alone} minutes
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell, ...styles.bottomCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.last_year_flight_time_double} minutes
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.leftCell, ...styles.rightCell, ...styles.bottomCell}}>
                    <Text style={styles.textCell}>
                      Depuis l'obtention de la license (CPL, PPL)
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell, ...styles.bottomCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.since_license_flight_time} minutes
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell, ...styles.bottomCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.since_license_flight_time_alone} minutes
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell, ...styles.bottomCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.since_license_flight_time_double} minutes
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableHighlight
                underlayColor='transparent'
                style={styles.highlight}
                onPress={() => {this.setModalTimeVisible(!this.state.modalTimeVisible)}}>
                <Image source={require('../images/Back.png')} style={styles.backView}/>
              </TouchableHighlight>
            </View>
          </Modal>
          <Modal
            animationType={'fade'}
            transparent={true}
            visible={this.state.modalNumberVisible}
            onRequestClose={() => {this.setModalNumberVisible(!this.state.modalNumberVisible)}}>
            <View style={styles.modalView}>
              <Text style={styles.title}>STATISTIQUES DE NOMBRE DE VOLS</Text>
              <View style={{...styles.mainView, justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.row}>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.leftCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      Type
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      Nombre de vols au total
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      Nombre de vols en double commande
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      Nombre de vols en commandant de bord
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.leftCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      Depuis le premier vol
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.flights_nb}
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.flights_nb_double}
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.flights_nb_alone}
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.leftCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      Ces 3 derniers mois
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.last_3m_flights_nb}
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.last_3m_flights_nb_double}
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.last_3m_flights_nb_alone}
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.leftCell, ...styles.rightCell, ...styles.bottomCell}}>
                    <Text style={styles.textCell}>
                      Dans la dernière année
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell, ...styles.bottomCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.last_year_flights_nb}
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell, ...styles.bottomCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.last_year_flights_nb_double}
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell, ...styles.bottomCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.last_year_flights_nb_alone}
                    </Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.leftCell, ...styles.rightCell, ...styles.bottomCell}}>
                    <Text style={styles.textCell}>
                      Depuis l'obtention de la license (CPL, PPL)
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell, ...styles.bottomCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.since_license_flights_nb}
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell, ...styles.bottomCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.since_license_flights_nb_double}
                    </Text>
                  </View>
                  <View style={{...styles.cell, ...styles.topCell, ...styles.rightCell, ...styles.bottomCell}}>
                    <Text style={styles.textCell}>
                      {this.props.stats.since_license_flights_nb_alone}
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableHighlight
                underlayColor='transparent'
                style={styles.highlight}
                onPress={() => {this.setModalNumberVisible(!this.state.modalNumberVisible)}}>
                <Image source={require('../images/Back.png')} style={styles.backView}/>
              </TouchableHighlight>
            </View>
          </Modal>
          <View style={styles.dataView}>
            <Text style={styles.title}>TEMPS DE VOL MOYEN PAR MOIS</Text>
            <Text style={styles.text}>
              {this.props.stats.avg_flight_time_per_month} minutes
            </Text>
          </View>
          <View style={styles.dataView}>
            <Text style={styles.title}>PRIX TOTAL DES VOLS EFFECTUÉS</Text>
            <Text style={styles.text}>
              {Math.round(parseFloat(this.props.stats.total_flights_cost) * 100) / 100} €
            </Text>
          </View>
          <View style={styles.dataView}>
            <Text style={styles.title}>NOMBRE TOTAL DE VOLS</Text>
            <Text style={styles.text}>
              {this.props.stats.flights_nb} vols
            </Text>
          </View>
          <View style={{...styles.dataView, height: 20*vh}}>
            <Text style={styles.title}>AÉRODROMES VISITÉS</Text>
            <Text style={styles.text}>
              {this.props.stats.visited_airfields.length !== 0
              ? this.props.stats.visited_airfields.reduce((a, b) => { return (`${a}, ${b.name}`) }, this.props.stats.visited_airfields[0].name)
              : 'Aucun aérodrome visité'
              }
            </Text>
          </View>
          <TouchableHighlight
            underlayColor='transparent'
            style={styles.highlight}
            onPress={() => this.setModalTimeVisible(!this.state.modalTimeVisible)}>
            <View style={styles.hightlightView}>
              <Text style={styles.highlightText}>VOIR LES STATISTIQUES DE TEMPS DE VOL</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor='transparent'
            style={styles.highlight}
            onPress={() => this.setModalNumberVisible(!this.state.modalNumberVisible)}>
            <View style={styles.hightlightView}>
              <Text style={styles.highlightText}>VOIR LES STATISTIQUES DE NOMBRE DE VOLS</Text>
            </View>
          </TouchableHighlight>
        </View>
      </Image>
    )
  }
}

export default Stats
