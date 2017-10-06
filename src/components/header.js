import React, { Component } from 'react';
import iphone from '../img/iphone.svg';
import styles from '../styles/header.css';

class Header extends Component {

  render() {
    return (
      <div className="App--Header Prose-splash">
        <img src={iphone} className="Header--logo" alt="logo" />
        <h2 className="Header--text">Привет! Я телефонный мастер Вася!</h2>
      </div>
    );
  }

}

export default Header;
