import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { handleRepairDialogClose } from '../actions/actions';
import store from '../store/store';
import RepairDialogContent from './repairdialogcontent';
import styles from './repairdialogcontent.css';
import './repairdialogcontent.css';

// const customContentStyle = {
//   width: '100%',
//   maxWidth: 'none',
// };

let mediaQuery = () => {
  if (window.matchMedia('(max-width: 400px)').matches) {
    return {
      width: '100%',
      maxWidth: 'none',
    };
  }
};

let mediaQueryBool = () => {
  if (window.matchMedia('(max-width: 600px)').matches) {
    return true;
  } else {
    return false;
  }
};

const Buttons = [<FlatButton label="Закрыть" primary={true} onClick={handleRepairDialogClose} />];

class RepairDialog extends Component {
  render() {
    return (
      <div>
        <Dialog
          title="Стоимость ремонта"
          actions={Buttons}
          modal={false}
          open={store.getState().repairDialogOpen}
          onRequestClose={handleRepairDialogClose}
          className={styles.root}
          bodyClassName="dialog"
          titleClassName="RepairDialogContent__Title"
          actionsContainerClassName="RepairDialogContent__actions"
          contentStyle={mediaQuery()}
          autoScrollBodyContent={mediaQueryBool()}
          repositionOnUpdate={true}
        >
          <RepairDialogContent />
        </Dialog>
        {console.log(mediaQuery())}
        {console.log(mediaQueryBool())}
      </div>
    );
  }
}

export default RepairDialog;
