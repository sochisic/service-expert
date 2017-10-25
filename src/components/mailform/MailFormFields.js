import React, { Component } from 'react';
import TextField from '../../../node_modules/material-ui/TextField';
import RaisedButton from '../../../node_modules/material-ui/RaisedButton';
import ActionSend from '../../../node_modules/material-ui/svg-icons/content/send';
import { fullWhite } from '../../../node_modules/material-ui/styles/colors';
import { lightBlue800, orange500, green800
 } from '../../../node_modules/material-ui/styles/colors';
import '../../styles/formcontainer.css';
import Heart from '../../img/heart_24px.svg';
import { connect } from '../../../node_modules/redux-zero';
import { handleUserInput, handleBlur } from '../actions/actions';

const mapToProps = ({ count, name, emailPhone, text, formErrorsName, formErrorsText, formErrorsEmailPhone, formValid, nameFieldErrorStyle, nameFieldFloatingFocusStyle, nameFieldBorderStyle }) => ({ count, name, emailPhone, text, formErrorsName, formErrorsText, formErrorsEmailPhone, formValid, nameFieldErrorStyle, nameFieldFloatingFocusStyle, nameFieldBorderStyle});


const styles = {
  button: {
    minWidth: '100px',
  },
  label: {
    color: 'white',
  }
};

  export default connect( mapToProps )(({ name, emailPhone, text, formErrorsName, formErrorsText, formErrorsEmailPhone, formValid, nameFieldErrorStyle, nameFieldFloatingFocusStyle, nameFieldBorderStyle }) => (
      <div>
        <TextField
          hintText=""
          fullWidth={true}
          floatingLabelText="Имя"
          className="MailForm--TextField-Name"
          value={ name }
          onChange={ handleUserInput }
          onBlur={ handleBlur }
          name="name"
          errorText={ formErrorsName }
          errorStyle={ nameFieldErrorStyle }
          floatingLabelFocusStyle={ nameFieldFloatingFocusStyle }
          underlineFocusStyle={ nameFieldBorderStyle }

        /><br />
        <TextField
          hintText=""
          fullWidth={true}
          floatingLabelText="Телефон"
          value={ emailPhone }
          onChange={ handleUserInput }
          name="emailPhone"
          errorText={ formErrorsEmailPhone }
          onBlur={ () => console.log('kek') }
        /><br />
        <TextField
          hintText="Сообщение"
          multiLine={true}
          fullWidth={true}
          rows={4}
          rowsMax={5}
          value={ text }
          onChange={ handleUserInput }
          onBlur={ () => console.log('kek') }
          name="text"
          errorText={ formErrorsText }
        /><br />
        <RaisedButton
          label="Отправить"
          labelPosition="after"
          className="MailForm--Fields-Button"
          backgroundColor={lightBlue800}
          icon={<ActionSend color={fullWhite} />}
          buttonStyle={styles.button}
          labelStyle={styles.label}
          disabled={ !formValid }
        />
      </div>
    ));
