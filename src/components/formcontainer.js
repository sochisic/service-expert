import React, { Component } from 'react';
import MailForm from './mailform';
import InfoForm from './infoform';
import '../styles/formcontainer.css';


class FormContainer extends Component {

  render() {
    return (
      <div className="App--FormContainer">
        <InfoForm />
        <MailForm />
      </div>
    );
  }

}

export default FormContainer;
