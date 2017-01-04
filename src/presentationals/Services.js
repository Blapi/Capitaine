import React from 'react'
import {View, ScrollView, Text, Image, TouchableHighlight, Modal} from 'react-native'
import {vw, vh} from 'react-native-viewport-units'
import moment from 'moment'
import ModalPicker from 'react-native-modal-picker'
import Spinner from 'react-native-loading-spinner-overlay'
import {easyFetch, jsonFetch} from '../utils/easyFetch'
//import config from '../config/config'

//const { login, password } = config.aviation

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

let minTemsiDate = moment().format('YYYYMMDD090000')
let minWintemDate = moment().format('YYYYMMDD000000')

class Services extends React.Component {
  constructor() {
    super()
    this.state = {
      modalTemsiVisible: false,
      modalWintemVisible: false,
      modalNotamVisible: false,
      airfield: '',
      metarData: '',
      notamData: '',
      tafData: '',
      temsiData: '',
      wintemData: '',
      requesting: false,
      temsiDate: '',
      wintemDate: ''
    }
  }

  componentWillMount() {
    if (moment().format('YYYYMMDDHHmmss') < minTemsiDate) {
      this.setState({temsiDate: moment().subtract(1, 'days').format('YYYYMMDD180000')})
    } else {
      while (parseInt(minTemsiDate) < parseInt(moment().format('YYYYMMDD180001'))) {
        if (this.state.temsiDate < moment().format('YYYYMMDDHHmmss')) {
          this.setState({temsiDate: minTemsiDate})
        }
        minTemsiDate = parseInt(minTemsiDate) + 30000
      }
    }

    while (parseInt(minWintemDate) < parseInt(moment().format('YYYYMMDD220001'))) {
      if (this.state.wintemDate < moment().format('YYYYMMDDHHmmss')) {
        this.setState({wintemDate: minWintemDate})
      }
      minWintemDate = parseInt(minWintemDate) + 20000
    }
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

  handleAirfield(airfield) {
    const metarTafRegex = /<raw_text>([\s\S]*?)<\/raw_text>/

    this.setState({airfield: airfield.label, requesting: true})

    Promise.all([
      easyFetch(`https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&hoursBeforeNow=3&mostRecent=true&stationString=${airfield.label}`)
        .get()
        .then(response => response.text()
        .then(data =>
          !data.match(metarTafRegex)
          ? Promise.resolve('Pas de données pour cet aérodrome')
          : Promise.resolve(data.match(metarTafRegex)[1])
        ))
        .catch(Promise.resolve('Pas de données pour cet aérodrome')),
      easyFetch(`https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=tafs&requestType=retrieve&format=xml&stationString=${airfield.label}&hoursBeforeNow=24&mostRecent=true`)
        .get()
        .then(response => response.text()
        .then(data =>
          !data.match(metarTafRegex)
          ? Promise.resolve('Pas de données pour cet aérodrome')
          : Promise.resolve(data.match(metarTafRegex)[1])
        ))
        .catch(Promise.resolve('Pas de données pour cet aérodrome')),
      easyFetch(`https://notams.aim.faa.gov/notamSearch/search`)
        .setHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', Accept: 'application/json, text/plain'})
        .post(`searchType=0&designatorsForLocation=${airfield.label}`)
        .then(response => response.json()
        .then(data =>
          data.notamList.length === 0
          ? Promise.resolve('Pas de données pour cet aérodrome')
          : Promise.resolve(data.notamList.reduce((a, b) => { return `${a}\n\n${b.icaoMessage}` }, data.notamList[0].icaoMessage))
        ))
        .catch(Promise.resolve('Pas de données pour cet aérodrome')),
/*      easyFetch(`https://aviation.meteo.fr/ajax/login_valid.php`)
        .setQueryParams({login: login, password: password})
        .post()
        .then(response => response.headers.get('set-cookies'))
        .then(cookies => cookies.match(/PHPSESSID\=([a-z0-9]+)/gi)[1])
        .then(cookie =>
          easyFetch(`https://aviation.meteo.fr/affiche_image.php?type=sigwx/fr/france&date=${this.state.temsiDate}&mode=img`)
            .setHeaders({Cookie: cookie})
            .get()
            .then(response => response.blob()
            .then(blob => Promise.resolve(URL.createObjectUrl(blob))))
          )
        .catch(Promise.resolve('Pas de données pour cet aérodrome')),*/
/*      easyFetch(`https://aviation.meteo.fr/ajax/login_valid.php`)
        .setQueryParams({login: login, password: password})
        .post()
        .then(response => response.headers.get('set-cookies'))
        .then(cookies => cookies.match(/PHPSESSID\=([a-z0-9]+)/gi)[1])
        .then(cookie =>
          easyFetch(`https://aviation.meteo.fr/affiche_image.php?type=wintemp/fr/france&date=${this.state.wintemDate}&mode=img`)
            .setHeaders({Cookie: cookie})
            .get()
            .then(response => response.blob()
            .then(blob => Promise.resolve(URL.createObjectUrl(blob))))
          )
        .catch(Promise.resolve('Pas de données pour cet aérodrome'))*/
        Promise.resolve('Pas de données pour cet aérodrome'),
        Promise.resolve('Pas de données pour cet aérodrome')
    ])
    .then(values => {
      console.log(values)
      this.setState({metarData: values[0], tafData: values[1], notamData: values[2], temsiData: values[3], wintemData: values[4], requesting: false})
    })
  }

  render() {
    const airfieldsData = this.props.airfields.map(e => {
      return {key: e.id, label: `${e.code}`}
    }).sort((lhs, rhs) => { return lhs.label.localeCompare(rhs.label) })

    return (
      <Image
        source={require('../images/Services_Background.jpg')}
        style={styles.background}>
        {this.state.requesting
        ? <View style={styles.main}>
            <Spinner visible={true}/>
          </View>
        : <ScrollView style={styles.mainView}>
            <Modal
              animationType={'fade'}
              transparent={true}
              visible={this.state.modalTemsiVisible}
              onRequestClose={() => {this.setModalTemsiVisible(!this.state.modalTemsiVisible)}}>
              <View style={styles.modalView}>
                <Text style={styles.title}>TEMSI</Text>
                <Text style={styles.text}>{moment().format('dddd D MMMM, HH[h]mm')}</Text>
                <Text style={styles.textModal}>
                  {this.state.temsiData}
                </Text>
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
                <Text style={styles.textModal}>
                  {this.state.wintemData}
                </Text>
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
                <Text style={styles.textModal}>
                  {this.state.notamData}
                </Text>
                <TouchableHighlight
                  underlayColor='transparent'
                  style={styles.highlight}
                  onPress={() => {this.setModalNotamVisible(!this.state.modalNotamVisible)}}>
                  <Image source={require('../images/Back.png')} style={styles.backView}/>
                </TouchableHighlight>
              </View>
            </Modal>
            <ModalPicker
              data={airfieldsData}
              style={{marginTop: 3 * vh}}
              initValue='Choisissez un aérodrome'
              selectTextStyle={styles.textSelected}
              optionTextStyle={styles.textOption}
              optionStyle={{opacity: 1}}
              cancelText='Annuler'
              cancelTextStyle={styles.textOption}
              onChange={(airfield) => this.handleAirfield(airfield)}>
            </ModalPicker>
            <View style={styles.main}>
              <Text style={styles.title}>
                {this.state.airfield}
              </Text>
            </View>
            <View style={styles.dataView}>
              <Text style={styles.title}>METAR</Text>
              <Text style={styles.text}>
                {this.state.metarData}
              </Text>
            </View>
            <View style={styles.dataView}>
              <Text style={styles.title}>TAF</Text>
              <Text style={styles.text}>
                {this.state.tafData}
              </Text>
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
          </ScrollView>
        }
      </Image>
    )
  }
}

export default Services
