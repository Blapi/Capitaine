import {connect} from 'react-redux'
import {getData} from '../actions/DataActions'
import Menu from '../presentationals/Menu'


const mapStateToProps = (state, ownProps) => {
  return {...state.syncData}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: () => {
      dispatch(getData())
    }
  }
}

const DataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

export default DataContainer