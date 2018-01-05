import React, { Component } from 'react';
import MailFormFields from './MailFormFields';

class MailForm extends Component {

  render() {
    return (
      <div className="MailForm" id="MailForm">
        <div>Оставьте нам сообщение</div>
        <MailFormFields />
      </div>
    );
  }

}

export default MailForm;
