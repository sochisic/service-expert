import React, { Component } from 'react';
import MailFormFields from './MailFormFields';

class MailForm extends Component {

  render() {
    return (
      <div className="MailForm">
        <div className="MailForm--title">
          Задайте вопрос или напишите нам сообщение.
        </div>
        <MailFormFields />
      </div>
    );
  }

}

export default MailForm;
