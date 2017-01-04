import React from 'react'
import {View, Text, Image, TextInput, TouchableHighlight, ListView, ScrollView, ToastAndroid} from 'react-native'
import {vw, vh} from 'react-native-viewport-units'
import moment from 'moment'
import DatePicker from 'react-native-datepicker'
import ModalPicker from 'react-native-modal-picker'
import CheckBox from 'react-native-checkbox'
import Button from 'react-native-button'

const styles = {
  background: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 54
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    paddingLeft: 5 * vw,
    paddingRight: 5 * vw,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  textTitle: {
    flex: 1,
    width: 100*vw,
    marginTop: 20,
    color: 'white',
    fontFamily: 'calibril',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textContent: {
    flex: 1,
    width: 100*vw,
    color: 'white',
    fontFamily: 'calibril',
    fontSize: 14,
    opacity: 0.8
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
  },
  textButton: {
    color: 'white',
    fontFamily: 'calibril',
    fontSize: 16
  },
  button: {
    backgroundColor: 'lightblue',
    width: 90*vw,
    height: 40,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 5,
    justifyContent: 'center'
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  hr: {
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    height: null,
    borderColor: 'white'
  }
}

class Flight extends React.Component {
  constructor() {
    super()
    this.state = {
      date: moment().format('DD/MM/YYYY'),
      role: '',
      type: '',
      plane : '',
      departure: '',
      arrival: '', 
      day: true,
      soloHours: '00:00',
      doubleHours: '00:00',
      landing: '',
      planeFee: '',
      instructionFee: '',
      note: '0',
      comment: ''
    }
  }

  onChangeLanding(input) {
    let newState = ''
    const numbers = '0123456789'

    for (var i = 0; i < input.length; i++) {
      if (numbers.indexOf(input[i]) > -1 ) {
        newState = newState + input[i]
      }
    }
    this.setState({landing: newState})
  }

  onChangePlaneFee(input) {
    let newState = ''
    const numbers = '0123456789'

    for (var i = 0; i < input.length; i++) {
      if (numbers.indexOf(input[i]) > -1 ) {
        newState = newState + input[i]
      }
    }
    this.setState({planeFee: newState})
  }

  onChangeInstructionFee(input) {
    let newState = ''
    const numbers = '0123456789'

    for (var i = 0; i < input.length; i++) {
      if (numbers.indexOf(input[i]) > -1 ) {
        newState = newState + input[i]
      }
    }
    this.setState({instructionFee: newState})
  }    

  render() {
    const planesData = this.props.planes.map(e => {
      return {key: e.id, label: `${e.type} - ${e.registration}`}
    })

    const airfieldsData = this.props.airfields.map(e => {
      return {key: e.id, label: `${e.code} - ${e.name}`}
    })

    const noteData = [0, 1, 2, 3, 4, 5].map((e, key) => {
      return {key: key, label: e}
    })

    return (
      <Image
        source={require('../images/Flightbook_Background.jpg')}
        style={styles.background}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.textTitle}>
            Date du vol
          </Text>
          <View style={styles.hr} />
          <DatePicker
            style={{width: 90*vw}}
            date={this.state.date}
            mode="date"
            format="DD/MM/YYYY"
            customStyles={{
              dateText: {
                color: 'white',
                fontFamily: 'calibril',
                fontSize: 14,
                opacity: 0.8
              },
              dateInput: {
                borderRadius: 5
              }
            }}
            onDateChange={(date) => {this.setState({date: date})}} />
          <Text style={styles.textTitle}>
            Appareil
          </Text>
          <View style={styles.hr} />
          <ModalPicker
            data={planesData}
            initValue='Choisissez un avion'
            selectTextStyle={styles.textSelected}
            optionTextStyle={styles.textOption}
            optionStyle={{opacity: 1}}
            cancelText='Annuler'
            cancelTextStyle={styles.textOption}
            onChange={(plane) => {this.setState({plane: plane})}}>
          </ModalPicker>
          <Text style={styles.textTitle}>
            Rôle à bord
          </Text>
          <View style={styles.hr} />
          <ModalPicker
            data={[{key: 1, label: 'Pilote'}, {key: 2, label: 'Élève pilote'}]}
            initValue='Choisissez un rôle à bord'
            selectTextStyle={styles.textSelected}
            optionTextStyle={styles.textOption}
            optionStyle={{opacity: 1}}
            cancelText='Annuler'
            cancelTextStyle={styles.textOption}
            onChange={(role) => {this.setState({role: role})}}>
          </ModalPicker>
          <Text style={styles.textTitle}>
            Type de vol
          </Text>
          <View style={styles.hr} />
          <TextInput
            style={{...styles.textContent, padding: 0}}
            underlineColorAndroid='transparent'
            value={this.state.type}
            placeholder='- - - - -'
            placeholderTextColor='white'
            onChangeText={(type) => this.setState({type: type})} />
          <Text style={styles.textTitle}>
            Aérodrome de décollage
          </Text>
          <View style={styles.hr} />
          <ModalPicker
            data={airfieldsData}
            initValue='Choisissez un aérodrome'
            selectTextStyle={styles.textSelected}
            optionTextStyle={styles.textOption}
            optionStyle={{opacity: 1}}
            cancelText='Annuler'
            cancelTextStyle={styles.textOption}
            onChange={(departure) => {this.setState({departure: departure})}}>
          </ModalPicker>
          <Text style={styles.textTitle}>
            Aérodrome d'atterrissage
          </Text>
          <View style={styles.hr} />
          <ModalPicker
            data={airfieldsData}
            initValue='Choisissez un aérodrome'
            selectTextStyle={styles.textSelected}
            optionTextStyle={styles.textOption}
            optionStyle={{opacity: 1}}
            cancelText='Annuler'
            cancelTextStyle={styles.textOption}
            onChange={(arrival) => {this.setState({arrival: arrival})}}>
          </ModalPicker>
          <Text style={styles.textTitle}>
            Informations de vol
          </Text>
          <View style={styles.hr} />
          <View style={styles.containerRow}>
            <CheckBox
              label='Vol de jour'
              labelStyle={styles.textContent}
              checked={this.state.day}
              checkedImage={require('../images/cb_enabled.png')}
              uncheckedImage={require('../images/cb_disabled.png')}              
              containerStyle={{width: 40*vw}}
              onChange={(checked) => {this.setState({day: !this.state.day})}} />
            <CheckBox
              label='Vol de nuit'
              labelStyle={styles.textContent}
              checked={!this.state.day}
              checkedImage={require('../images/cb_enabled.png')}
              uncheckedImage={require('../images/cb_disabled.png')}              
              containerStyle={{width: 40*vw}}
              onChange={(checked) => {this.setState({day: !this.state.day})}} />
          </View>
          <View style={styles.containerRow}>
            <DatePicker
              style={{width: 20*vw, marginRight: 10, marginBottom: 5}}
              date={this.state.soloHours}
              mode="time"
              format="HH:mm"
              showIcon={false}
              customStyles={{
                dateText: {
                  color: 'white',
                  fontFamily: 'calibril',
                  fontSize: 14,
                  opacity: 0.8
                },
                dateInput: {
                  borderRadius: 5
                }
              }}
              onDateChange={(soloHours) => {this.setState({soloHours: soloHours})}} />
            <Text style={styles.textContent}>
              Heure(s) de vol : Commandant de bord
            </Text>
          </View>
          <View style={styles.containerRow}>
            <DatePicker
              style={{width: 20*vw, marginRight: 10, marginBottom: 5}}
              date={this.state.doubleHours}
              mode="time"
              format="HH:mm"
              showIcon={false}
              customStyles={{
                dateText: {
                  color: 'white',
                  fontFamily: 'calibril',
                  fontSize: 14,
                  opacity: 0.8
                },
                dateInput: {
                  borderRadius: 5
                }
              }}
              onDateChange={(doubleHours) => {this.setState({doubleHours: doubleHours})}} />
            <Text style={styles.textContent}>
              Heure(s) de vol : Double commande
            </Text>
          </View>
          <View style={styles.containerRow}>
            <TextInput
              style={{...styles.textContent, padding: 0, width: 20*vw, marginRight: 10, 'textAlign': 'center'}}
              underlineColorAndroid='transparent'
              keyboardType='numeric'
              value={this.state.landing}
              placeholder='0'
              placeholderTextColor='white'
              onChangeText={(landing) => this.onChangeLanding(landing)} />
            <Text style={styles.textContent}>
              Nombre d'atterrissage(s)
            </Text>
          </View>
          <Text style={styles.textTitle}>
            Tarifs avion/instruction
          </Text>
          <View style={styles.hr} />
          <View style={styles.containerRow}>
            <TextInput
              style={{...styles.textContent, padding: 0, width: 20*vw, marginRight: 10, 'textAlign': 'center'}}
              underlineColorAndroid='transparent'
              keyboardType='numeric'
              value={this.state.planeFee}
              placeholder='0'
              placeholderTextColor='white'
              onChangeText={(planeFee) => this.onChangePlaneFee(planeFee)} />
            <Text style={styles.textContent}>
              Prix avion (en €/h)
            </Text>
          </View>
          <View style={styles.containerRow}>
            <TextInput
              style={{...styles.textContent, padding: 0, width: 20*vw, marginRight: 10, 'textAlign': 'center'}}
              underlineColorAndroid='transparent'
              keyboardType='numeric'
              value={this.state.instructionFee}
              placeholder='0'
              placeholderTextColor='white'
              onChangeText={(instructionFee) => this.onChangeInstructionFee(instructionFee)} />
            <Text style={styles.textContent}>
              Majoration instruction (en €/h)
            </Text>
          </View>
          <Text style={styles.textTitle}>
            Résumé du vol
          </Text>
          <View style={styles.hr} />
          <View style={styles.containerRow}>
            <ModalPicker
              data={noteData}
              style={{width: 20*vw, marginRight: 10, marginBottom: 5}}
              initValue='0'
              selectTextStyle={styles.textSelected}
              optionTextStyle={styles.textOption}
              optionStyle={{opacity: 1}}
              cancelText='Annuler'
              cancelTextStyle={styles.textOption}
              onChange={(note) => {this.setState({note: note})}}>
            </ModalPicker>
            <Text style={styles.textContent}>
              Note /5
            </Text>
          </View>
          <TextInput
            style={{...styles.textContent, width: 90*vw, padding: 5, borderWidth: 1, borderColor: 'white', textAlign: 'center'}}
            multiline={true}
            numberOfLines={6}
            maxLength={300}
            underlineColorAndroid='transparent'
            value={this.state.comment}
            placeholder='Commentaire de vol'
            placeholderTextColor='white'
            onChangeText={(comment) => this.setState({comment: comment})} />
          <Button
            containerStyle={styles.button}
            style={styles.textButton}
            onPress={() => {alert('AJOUTÉ')}}>
            VALIDER L'AJOUT
          </Button>
        </ScrollView>
      </Image>
    )
  }
}

export default Flight
