import {connect} from 'react-redux'
import {getData} from '../actions/DataActions'
import SideMenu from '../presentationals/SideMenu'


const mapStateToProps = (state, ownProps) => {
  return {...state.syncData}
}

const SideMenuContainer = connect(
  mapStateToProps
)(SideMenu)

export default SideMenuContainer