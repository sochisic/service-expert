import React, { Component } from 'react';
import MailFormFields from '../mailform/MailFormFields';
import InfoForm from './infoform';
import './formcontainer.css';
import '../ForthScreen/ForthScreen.css';

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
          <h3>Извините но данное поле находится в разработке!</h3>
          <MailFormFields />
        </div>
      </div>
    );
  }
}

export default FormContainer;
