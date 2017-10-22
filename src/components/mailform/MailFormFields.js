import React, { Component } from 'react';
import TextField from '../../../node_modules/material-ui/TextField';
import RaisedButton from '../../../node_modules/material-ui/RaisedButton';
import ActionSend from '../../../node_modules/material-ui/svg-icons/content/send';
import { fullWhite } from '../../../node_modules/material-ui/styles/colors';
import { lightBlue800 } from '../../../node_modules/material-ui/styles/colors';
import '../../styles/formcontainer.css';
import Heart from '../../img/heart_24px.svg';
import { connect } from '../../../node_modules/redux-zero';
import { validateField, handleUserInput } from '../actions/actions';

const mapToProps = ({ count, name, emailPhone, text, buttonDisabled }) => ({ count, name, emailPhone, text, buttonDisabled });




const styles = {
  button: {
    minWidth: '100px',
  },
  label: {
    color: 'white',
  },
  icon: {

  },

};

// handleUserInput = (e) => {
// const name = e.target.name;
// const value = e.target.value;
// this.setState({[name]: value},
//   () => {validateField(name, value)});
//
// };

  export default connect(mapToProps)(({name, emailPhone, text, buttonDisabled}) => (
      <div>
        <TextField
          hintText=""
          fullWidth={true}
          floatingLabelText="Имя"
          className="MailForm--TextField-Name"
          value={ name }
          onChange={ handleUserInput }
          name="name"
        /><br />
        <TextField
          hintText=""
          fullWidth={true}
          floatingLabelText="Телефон"
          value={ emailPhone }
          onChange={ handleUserInput }
          name="emailPhone"
        /><br />
        <TextField
          hintText="Сообщение"
          multiLine={true}
          fullWidth={true}
          rows={4}
          rowsMax={5}
          value={ text }
          onChange={ handleUserInput }
          name="text"
        /><br />
        <RaisedButton
          label="Отправить"
          labelPosition="after"
          className="MailForm--Fields-Button"
          backgroundColor={lightBlue800}
          icon={<ActionSend color={fullWhite} />}
          buttonStyle={styles.button}
          labelStyle={styles.label}
          disabled={ buttonDisabled }
        />
      </div>
    ));
