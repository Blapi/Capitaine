import React from 'react'
import Drawer from 'react-native-drawer'
import SideMenuContainer from '../containers/SideMenuContainer'
import {Actions, DefaultRenderer} from 'react-native-router-flux'

/*
 * USED FOR SIDE MENU
*/

class CapDrawer extends React.Component {
  render() {
    const state = this.props.navigationState
    const children = state.children
    return (
      <Drawer
        ref='navigation'
        open={state.open}
        onOpen={()=>Actions.refresh({key:state.key, open: true})}
        onClose={()=>Actions.refresh({key:state.key, open: false})}
        type='displace'
        content={<SideMenuContainer />}
        tapToClose={true}
        openDrawerOffset={0.3}
        panCloseMask={0.2}
        negotiatePan={true}
        tweenHandler={(ratio) => ({
        main: { opacity:Math.max(0.6,1-ratio) }
      })}>
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    )
  }
}

export default CapDrawer
