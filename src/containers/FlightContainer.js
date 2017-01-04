import {connect} from 'react-redux'
import {getData} from '../actions/DataActions'
import Flight from '../presentationals/Flight'


const mapStateToProps = (state, ownProps) => {
  return {...state.syncData}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addFlight: () => {
      dispatch(addFlight())
    }
  }
}

const FlightContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Flight)

export default FlightContainer