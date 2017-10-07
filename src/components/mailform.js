import React, { Component } from 'react';

class MailForm extends Component {

  render() {
    return (
      <div className="MailForm">
        <div className="MailForm--title">
          Заглавие формы обратной связи.
        </div>
        <div className="MailForm--content">
          Содержание формы обратной связи.
        </div>
      </div>
    );
  }

}

export default MailForm;
