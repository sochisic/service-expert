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

const mapToProps = ({ count, name, emailPhone, text, formErrorsName, formErrorsText, formErrorsEmailPhone, formValid, nameFieldErrorStyle, nameFieldFloatingFocusStyle, nameFieldBorderStyle, phoneFieldErrorStyle, phoneFieldFloatingFocusStyle, phoneFieldBorderStyle, textFieldErrorStyle, textFieldFloatingFocusStyle, textFieldBorderStyle}) => ({ count, name, emailPhone, text, formErrorsName, formErrorsText, formErrorsEmailPhone, formValid, nameFieldErrorStyle, nameFieldFloatingFocusStyle, nameFieldBorderStyle, phoneFieldErrorStyle, phoneFieldFloatingFocusStyle, phoneFieldBorderStyle, textFieldErrorStyle, textFieldFloatingFocusStyle, textFieldBorderStyle});


const styles = {
  button: {
    minWidth: '100px',
  },
  label: {
    color: 'white',
  },
  name: {
    color: lightBlue800
  },
  underline: {
    underline: lightBlue800
  }
};

  export default connect( mapToProps )(({ name, emailPhone, text, formErrorsName, formErrorsText, formErrorsEmailPhone, formValid, nameFieldErrorStyle, nameFieldFloatingFocusStyle, nameFieldBorderStyle, phoneFieldErrorStyle, phoneFieldFloatingFocusStyle, phoneFieldBorderStyle, textFieldErrorStyle, textFieldFloatingFocusStyle, textFieldBorderStyle }) => (
      <div>
        <TextField
          hintText=""
          fullWidth={true}
          floatingLabelText="Ваше имя"
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
          floatingLabelText="Ваш телефон"
          value={ emailPhone }
          onChange={ handleUserInput }
          name="emailPhone"
          errorText={ formErrorsEmailPhone }
          onBlur={ handleBlur }
          errorStyle={ phoneFieldErrorStyle }
          floatingLabelFocusStyle={ phoneFieldFloatingFocusStyle }
          underlineFocusStyle={ phoneFieldBorderStyle }
        /><br />
        <TextField
          hintText="Ваше сообщение"
          multiLine={true}
          fullWidth={true}
          rows={4}
          rowsMax={5}
          value={ text }
          onChange={ handleUserInput }
          onBlur={ handleBlur }
          name="text"
          errorText={ formErrorsText }
          errorStyle={ textFieldErrorStyle }
          floatingLabelFocusStyle={ textFieldFloatingFocusStyle }
          underlineFocusStyle={ textFieldBorderStyle }
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
          onBlur={ handleBlur }
        />
      </div>
    ));
