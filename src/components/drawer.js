import React from 'react';
import Drawer from '../../node_modules/material-ui/Drawer';
import AppBar from '../../node_modules/material-ui/AppBar';
import IconButton from '../../node_modules/material-ui/IconButton';
import NavigationClose from '../../node_modules/material-ui/svg-icons/navigation/close';
import MenuItem from '../../node_modules/material-ui/MenuItem';

export default class RightDrawer extends React.Component {

  render() {
    return (
      <div>
        <Drawer
          width={250}
          openSecondary={true}
          open={this.props.open}>
          <AppBar
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onLeftIconButtonTouchTap={this.props.drawerToggle}
          title="Мастер Вася!" />
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
