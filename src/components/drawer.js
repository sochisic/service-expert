import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import phones from './repaircontainer/phonesCONST';

import { connect } from 'redux-zero/react';
import actions, { rewind } from './actions/actions';

const mapToProps = ({ drawerOpen }) => ({ drawerOpen });

const RenderMenuItem = ({ arr }) => (
  <React.Fragment>{arr.map(element => <MenuItem key={element.key}>{element.name}</MenuItem>)}</React.Fragment>
);

export default connect(mapToProps, actions)(({ drawerOpen, handleToggleDrawer }) => (
  <div>
    <Drawer width={250} openSecondary={true} open={drawerOpen}>
      <AppBar
        iconElementLeft={
          <IconButton onClick={handleToggleDrawer}>
            <NavigationClose />
          </IconButton>
        }
        title="Sochi Phone"
      />
      <RenderMenuItem arr={phones} />
      <Divider inset={false} />
      <MenuItem onClick={rewind} className="Drawer__ContactsButton">
        Сообщение нам
      </MenuItem>
      <MenuItem onClick={rewind} className="Drawer__ContactsButton">
        Контакты
      </MenuItem>
    </Drawer>
  </div>
));
