import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { handleRepairDialogClose } from '../actions/actions';
import store from '../store/store';

const customContentStyle = {
  width: '60%',
  maxWidth: 'none',
};

console.log(this.props);

const Buttons = [<FlatButton label="Закрыть" primary={true} onClick={handleRepairDialogClose} />];

class repairdialog extends Component {
  render() {
    return (
      <div>
        <Dialog
          title="Стоимость ремонта"
          actions={Buttons}
          modal={false}
          contentStyle={customContentStyle}
          open={store.getState().repairDialogOpen}
          onRequestClose={handleRepairDialogClose}
        >
          This dialog spans the entire width of the screen.
        </Dialog>
      </div>
    );
  }
}

export default repairdialog;
