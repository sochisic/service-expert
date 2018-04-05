import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Message from 'material-ui/svg-icons/communication/message';
import Cost from 'material-ui/svg-icons/editor/attach-money';
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import IconButton from 'material-ui/IconButton';
import { red500, yellow500, blue500 } from 'material-ui/styles/colors';
// import '../../styles/repaircontainer.css';
import './buttoncontainer.css';
import '../firstscreen/firstscreen.css';
import { connect } from 'redux-zero/react';
import actions, { rewind } from '../actions/actions';
// import RepairDialog from '../repaircontainer/repairdialog';

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

const iconStyles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

const mapToProps = ({ repairDialogOpen, repairDialogSelectedItem }) => ({ repairDialogOpen, repairDialogSelectedItem });

export default connect(mapToProps, actions)(
  ({ repairDialogSelectedItem, repairDialogOpen, handleRepairDialogClose, handleRepairDialogOpen }) => (
    <div className="ButtonContainer">
      <div className="ButtonWrapper">
        <div className="Buttons">
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
        </div>
      </div>
      <div className="arrowDown">
        <IconButton iconStyle={iconStyles.largeIcon} style={iconStyles.large}>
          <ArrowDownward color={blue500} />
        </IconButton>
      </div>
    </div>
  )
);
