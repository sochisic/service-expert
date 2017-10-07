import React, { Component } from 'react';
import '../styles/formcontainer.css';

class InfoForm extends Component {

  render() {
    return (
      <div className="InfoForm">
        <div className="InfoForm--title">
          Заголовок информационной формы.
        </div>
        <div className="InfoForm--item1">1</div>
        <div className="InfoForm--item2">2</div>
        <div className="InfoForm--item3">3</div>
        <div className="InfoForm--item4">4</div>
      </div>
    );
  }

}

export default InfoForm;
