import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { handleRepairDialogClose } from '../actions/actions';
import store from '../store/store';
import RepairDialogContent from './repairdialogcontent';
import styles from './repairdialogcontent.css';
import './repairdialogcontent.css';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

const Buttons = [<FlatButton label="Закрыть" primary={true} onClick={handleRepairDialogClose} />];

class repairdialog extends Component {
  render() {
    return (
      <div>
        <Dialog
          title="Стоимость ремонта"
          actions={Buttons}
          modal={false}
          // contentStyle={customContentStyle}
          open={store.getState().repairDialogOpen}
          onRequestClose={handleRepairDialogClose}
          contentStyle={styles.dialog}
          contentClassName="dialog"
          style={styles}
          bodyClassName="dialog"
          titleClassName="RepairDialogContent__Title"
          actionsContainerClassName="RepairDialogContent__actions"
        >
          <RepairDialogContent />
          {console.log(styles, customContentStyle)}
        </Dialog>
      </div>
    );
  }
}

export default repairdialog;
