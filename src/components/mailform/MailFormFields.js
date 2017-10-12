import React from 'react';
import TextField from '../../../node_modules/material-ui/TextField';
import RaisedButton from '../../../node_modules/material-ui/RaisedButton';
import ActionSend from '../../../node_modules/material-ui/svg-icons/content/send';
import {fullWhite} from '../../../node_modules/material-ui/styles/colors';
import {indigo700,
lightBlue800
, pink500} from '../../../node_modules/material-ui/styles/colors';
import '../../styles/formcontainer.css';

const styles = {
  button: {
    minWidth: '200px',
  },
  label: {
    color: 'white',
  },

};

const TextFieldExampleSimple = () => (
  <div>

    <TextField
      hintText=""
      fullWidth={true}
      floatingLabelText="Имя"
    /><br />
    <TextField
      hintText=""
      fullWidth={true}
      floatingLabelText="Телефон"
    /><br />
    <TextField
      hintText="Сообщение"
      multiLine={true}
      fullWidth={true}
      rows={2}
      rowsMax={4}
    /><br />
    <RaisedButton
      label="Отправить сообщение"
      labelPosition="after"
      className="MailForm--Fields-Button"
      backgroundColor={lightBlue800}
      icon={<ActionSend color={fullWhite} />}
      buttonStyle={styles.button}
      labelStyle={styles.label}

    />
  </div>
);

export default TextFieldExampleSimple;
