import React from 'react'
import {View, Text, Image, TouchableHighlight, Modal} from 'react-native'
import {vw, vh} from 'react-native-viewport-units'
import moment from 'moment'

const styles = {
  background: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 54
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
  textModal: {
    flex: 1,
    marginTop: 10 * vh,
    color: 'white',
    fontFamily: 'calibril',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 12
  }
}

class Services extends React.Component {
  state = {
    modalTemsiVisible: false,
    modalWintemVisible: false,
    modalNotamVisible: false
  }

  setModalTemsiVisible(visible) {
    this.setState({modalTemsiVisible: visible})
  }

  setModalWintemVisible(visible) {
    this.setState({modalWintemVisible: visible})
  }

  setModalNotamVisible(visible) {
    this.setState({modalNotamVisible: visible})
  }

  render() {
    return (
      <Image source={require('../images/Services_Background.jpg')} style={styles.background}>
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalTemsiVisible}
          onRequestClose={() => {this.setModalTemsiVisible(!this.state.modalTemsiVisible)}}>
          <View style={styles.modalView}>
            <Text style={styles.title}>TEMSI</Text>
            <Text style={styles.text}>{moment().format('dddd D MMMM, HH[h]mm')}</Text>
            <Text style={styles.textModal}>TEMSI data...</Text>
            <TouchableHighlight
              underlayColor='transparent'
              style={styles.highlight}
              onPress={() => {this.setModalTemsiVisible(!this.state.modalTemsiVisible)}}>
              <Image source={require('../images/Back.png')} style={styles.backView}/>
            </TouchableHighlight>
          </View>
        </Modal>
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalWintemVisible}
          onRequestClose={() => {this.setModalWintemVisible(!this.state.modalWintemVisible)}}>
          <View style={styles.modalView}>
            <Text style={styles.title}>WINTEM</Text>
            <Text style={styles.text}>{moment().format('dddd D MMMM, HH[h]mm')}</Text>
            <Text style={styles.textModal}>WINTEM data...</Text>
            <TouchableHighlight
              underlayColor='transparent'
              style={styles.highlight}
              onPress={() => {this.setModalWintemVisible(!this.state.modalWintemVisible)}}>
              <Image source={require('../images/Back.png')} style={styles.backView}/>
            </TouchableHighlight>
          </View>
        </Modal>
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={this.state.modalNotamVisible}
          onRequestClose={() => {this.setModalNotamVisible(!this.state.modalNotamVisible)}}>
          <View style={styles.modalView}>
            <Text style={styles.title}>NOTAM</Text>
            <Text style={styles.text}>{moment().format('dddd D MMMM, HH[h]mm')}</Text>
            <Text style={styles.textModal}>NOTAM data...</Text>
            <TouchableHighlight
              underlayColor='transparent'
              style={styles.highlight}
              onPress={() => {this.setModalNotamVisible(!this.state.modalNotamVisible)}}>
              <Image source={require('../images/Back.png')} style={styles.backView}/>
            </TouchableHighlight>
          </View>
        </Modal>
        <View style={styles.dataView}>
          <Text style={styles.title}>METAR</Text>
          <Text style={styles.text}>METAR LFMT 051330Z AUTO COR 04508G25KT 1000</Text>
          <Text style={styles.text}>0500SW R31R/1000 BCFG BR OVC002 10/02 Q1026=</Text>
        </View>
        <View style={styles.dataView}>
          <Text style={styles.title}>SPECI</Text>
          <Text style={styles.text}>SPECI LFMT 051330Z AUTO COR 04508G25KT 1000</Text>
          <Text style={styles.text}>0500SW R31R/1000 BCFG BR OVC002 10/02 Q1026 RMK M2=</Text>
        </View>
        <View style={styles.dataView}>
          <Text style={styles.title}>TAF</Text>
          <Text style={styles.text}>TAF LFMT 051300Z 0514/0614 04508G25KT CAVOK</Text>
          <Text style={styles.text}>BECMG 0502/0504 BKN012 PROB30 TEMPO 0605/0608 BKN005=</Text>
        </View>
        <TouchableHighlight
          underlayColor='transparent'
          style={styles.highlight}
          onPress={() => this.setModalTemsiVisible(!this.state.modalTemsiVisible)}>
          <View style={styles.hightlightView}>
            <Text style={styles.highlightText}>VOIR LA CARTE TEMSI</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor='transparent'
          style={styles.highlight}
          onPress={() => this.setModalWintemVisible(!this.state.modalWintemVisible)}>
          <View style={styles.hightlightView}>
            <Text style={styles.highlightText}>VOIR LA CARTE WINTEM</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor='transparent'
          style={styles.highlight}
          onPress={() => this.setModalNotamVisible(!this.state.modalNotamVisible)}>
          <View style={styles.hightlightView}>
            <Text style={styles.highlightText}>NOTAM</Text>
          </View>
        </TouchableHighlight>
      </Image>
    )
  }
}

export default Services
