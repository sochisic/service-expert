import React from "react";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import MenuItem from "material-ui/MenuItem";
import Divider from "material-ui/Divider";

import { connect } from "redux-zero/react";
import actions, { rewind } from "./actions/actions";

const mapToProps = ({ drawerOpen }) => ({ drawerOpen });

export default connect(mapToProps, actions)(
  ({ drawerOpen, handleToggleDrawer }) => (
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
        <MenuItem>iphone 4 и 4s</MenuItem>
        <MenuItem>iphone 5 и 5s,5c,5se</MenuItem>
        <MenuItem>iphone 6 и 6s</MenuItem>
        <MenuItem>iphone 6+ и 6s+</MenuItem>
        <MenuItem>iphone 7</MenuItem>
        <MenuItem>iphone 7+</MenuItem>
        <MenuItem>iphone 8</MenuItem>
        <MenuItem>iphone 8+</MenuItem>
        <MenuItem>iphone X</MenuItem>
        <Divider inset={false} />
        <MenuItem onClick={rewind} className="Drawer__ContactsButton">
          Сообщение нам
        </MenuItem>
        <MenuItem onClick={rewind} className="Drawer__ContactsButton">
          Контакты
        </MenuItem>
      </Drawer>
    </div>
  )
);
