import React, { Component } from 'react';
import logo from '../img/logo.svg';
import heart from '../img/heart_24px.svg';
import '../styles/footer.css';

class Footer extends Component {

  render() {
    return (
      <div className="App--Footer">
        <div className="Footer--textContent">Сделано на <a className="link" href="https://reactjs.org"><span className="reactSpan">  React</span><img src={logo} className="Footer--logo" alt="react logo" /></a>с <img  src={heart} className="Footer--heartLogo" /> к Сочи</div>
        <div className="Footer--author">старался <span className="Footer--author-email"> trexx@inbox.ru</span></div>
      </div>
    );
  }

}

export default Footer;
