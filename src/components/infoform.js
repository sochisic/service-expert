import React, { Component } from 'react';
import '../styles/formcontainer.css';
import Location from '../../node_modules/material-ui/svg-icons/communication/location-on';
import Mail from '../../node_modules/material-ui/svg-icons/communication/email';
import Phone from '../../node_modules/material-ui/svg-icons/action/settings-phone';
import {indigo700,
lightBlue800
, pink500} from '../../node_modules/material-ui/styles/colors';



const iconStyles = {
  smallIcon: {
      width: 25,
      height: 25,
    },
    mediumIcon: {
      width: 48,
      height: 48,
      paddingTop: 14,
    },
    largeIcon: {
      width: 60,
      height: 60,
    },
    small: {
      width: 72,
      height: 72,
      padding: 16,
    },
    medium: {
      width: 96,
      height: 96,
      padding: 24,
    },
    large: {
      width: 120,
      height: 120,
      padding: 30,
    },
};

class InfoForm extends Component {

  render() {
    return (
      <div className="InfoForm">
        <div className="InfoForm--title">
          Контакты для связи с нами.
        </div>
        <div className="InfoForm--item1">
          <Location style={iconStyles.mediumIcon} color={pink500} />
          <h4>
            Местонахождение
          </h4>
          <div className="Item--text">
            ТЦ Атриум оф. 201
          </div>
        </div>
        <div className="InfoForm--item2">
          <Mail style={iconStyles.mediumIcon} color={lightBlue800} />
          <h4>
            Email
          </h4>
          <div className="Item--text">
            Вася@мастер.ру
          </div>
        </div>
        <div className="InfoForm--item3">
          <Phone style={iconStyles.mediumIcon} color={indigo700}/>
          <h4>
            Телефон
          </h4>
          <div className="Item--text">
            +7-900-000-1212
          </div>
        </div>
        <div className="InfoForm--item4">

        </div>
      </div>
    );
  }

}

export default InfoForm;
