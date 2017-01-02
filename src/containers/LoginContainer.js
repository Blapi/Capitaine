import {connect} from 'react-redux'
import {getTokenWithNoRefresh} from '../actions/TokenActions'
import Login from '../presentationals/Login'

const mapStateToProps = (state, ownProps) => {
  return {...state.tokens}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTokenWithNoRefresh: (username, password) => {
      dispatch(getTokenWithNoRefresh(username, password))
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer