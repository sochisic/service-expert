import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Message from 'material-ui/svg-icons/communication/message';
import Cost from 'material-ui/svg-icons/editor/attach-money';
import '../../styles/repaircontainer.css';
import { connect } from 'redux-zero/react';
import actions, { rewind } from '../actions/actions';
import RepairDialog from '../repaircontainer/repairdialog';

const styles = {
  button: {
    margin: 12,
  },
  costbutton: {
    label: {
      color: 'white',
    },
    root: {
      border: '1px solid white',
    },
    bg: {
      backgroundColor: 'rgba(#ffffff, 0)',
      border: '1px solid white',
      margin: 12,
    },
  },
};

const mapToProps = ({ repairDialogOpen, repairDialogSelectedItem }) => ({ repairDialogOpen, repairDialogSelectedItem });

export default connect(mapToProps, actions)(
  ({ repairDialogSelectedItem, repairDialogOpen, handleRepairDialogClose, handleRepairDialogOpen }) => (
    <div className="RepairContainer--ButtonContainer">
      <RaisedButton
        label="Связаться с нами"
        labelPosition="after"
        primary={true}
        icon={<Message />}
        style={styles.button}
        className="RepairContainer--button"
        labelStyle={styles.costbutton.label}
        onClick={rewind}
      />
      <RaisedButton
        label="Сколько стоит?"
        onClick={handleRepairDialogOpen}
        labelPosition="after"
        primary={false}
        icon={<Cost />}
        style={styles.costbutton.bg}
        labelStyle={styles.costbutton.label}
        className="RepairContainer--costbutton"
        backgroundColor="hsla(0, 0%, 100%, 0)"
      />
      <RepairDialog>This dialog spans the entire width of the screen.</RepairDialog>
    </div>
  )
);
