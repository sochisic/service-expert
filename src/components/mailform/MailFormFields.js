import React, { Component } from 'react';
import TextField from '../../../node_modules/material-ui/TextField';
import RaisedButton from '../../../node_modules/material-ui/RaisedButton';
import ActionSend from '../../../node_modules/material-ui/svg-icons/content/send';
import { fullWhite } from '../../../node_modules/material-ui/styles/colors';
import { lightBlue800 } from '../../../node_modules/material-ui/styles/colors';
import '../../styles/formcontainer.css';
import Heart from '../../img/heart_24px.svg';


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


class TextFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      emailPhone: '',
      text: '',
      nameValid: false,
      emailPhoneValid: false,
      textValid: false,
      buttonDisabled: true,
      formErrors: {name: '', emailPhone: '', text: ''}
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value},
    () => {this.validateField(name, value)});

}

validateField(fieldName, value) {
  let nameValid = this.state.nameValid;
  let emailPhoneValid = this.state.emailPhoneValid;
  let textValid = this.state.textValid;

  switch (fieldName) {
    case 'name':
      nameValid = value.length <= 20;
      break;
    case 'emailPhone':
      emailPhoneValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      break;

    case 'text':
      textValid = value.length <= 370;
    break;
    default:

  }

}

  render() {
    return (
      <div>
        <TextField
          hintText=""
          fullWidth={true}
          floatingLabelText="Имя"
          className="MailForm--TextField-Name"
          value={this.state.name}
          onChange={this.handleUserInput}
          name="name"
        /><br />
        <TextField
          hintText=""
          fullWidth={true}
          floatingLabelText="Телефон"
          value={this.state.emailPhone}
          onChange={this.handleUserInput}
          name="emailPhone"
        /><br />
        <TextField
          hintText="Сообщение"
          multiLine={true}
          fullWidth={true}
          rows={4}
          rowsMax={5}
          value={this.state.text}
          onChange={this.handleUserInput}
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
          disabled={this.state.buttonDisabled}
        />
      </div>
    );
  }
}

export default TextFields;
