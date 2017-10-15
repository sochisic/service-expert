import React, { Component } from 'react';
import MailForm from './mailform/mailform';
import InfoForm from './infoform';
import '../styles/formcontainer.css';


class FormContainer extends Component {

  render() {
    return (
      <div className="App--FormContainer">

        <div className="InfoForm--Container">
          <h2 className="InfoForm--title">Контакты для связи с нами</h2>
          <InfoForm />
        </div>
        <div className="MailForm--Container">
          <h2 className="MailForm--title">Задайте вопрос или напишите нам сообщение</h2>
          <MailForm />
        </div>
        </div>
        );
  }

}

export default FormContainer;
