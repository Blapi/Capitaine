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
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    height: 12 * vh,
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
  highlight: {
    opacity: 0.8
  },
  textModal: {
    flex: 1,
    marginTop: 10 * vh,
    color: 'white',
    fontFamily: 'calibril',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 12
  },
  textSelected: {
    color: 'white',
    fontFamily: 'calibril',
    fontSize: 14,
    opacity: 0.8
  },
  textOption: {
    fontFamily: 'calibril',
    fontSize: 16
  }
}

class Services extends React.Component {
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
              <Text style={styles.textModal}>
              </Text>
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
              <Text style={styles.textModal}>
              </Text>
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
              {}
            </Text>
          </View>
          <View style={styles.dataView}>
            <Text style={styles.title}>PRIX TOTAL DES VOLS EFFECTUÉS</Text>
            <Text style={styles.text}>
              {}
            </Text>
          </View>
          <View style={styles.dataView}>
            <Text style={styles.title}>NOMBRE TOTAL DE VOLS</Text>
            <Text style={styles.text}>
              {}
            </Text>
          </View>
          <View style={styles.dataView}>
            <Text style={styles.title}>AÉRODROMES VISITÉS</Text>
            <Text style={styles.text}>
              {}
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

export default Services
