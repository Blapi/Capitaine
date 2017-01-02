import {connect} from 'react-redux'
import {getTokenWithNoRefresh, addUser} from '../actions/TokenActions'
import Signup from '../presentationals/Signup'

const mapStateToProps = (state, ownProps) => {
  return {...state.tokens}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTokenWithNoRefresh: (username, password) => {
      dispatch(getTokenWithNoRefresh(username, password))
    },
    addUser: (username, password, mailAddress) => {
    	dispatch(addUser(username, password, mailAddress))
    }
  }
}

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)

export default SignupContainer