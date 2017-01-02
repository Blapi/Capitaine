import {connect} from 'react-redux'
import {getTokenWithRefresh} from '../actions/TokenActions'
import Start from '../presentationals/Start'

const mapStateToProps = (state, ownProps) => {
  return {...state.tokens}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTokenWithRefresh: () => {
      dispatch(getTokenWithRefresh())
    }
  }
}

const StartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Start)

export default StartContainer