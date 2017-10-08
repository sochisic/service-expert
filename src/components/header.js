import React, { Component } from 'react';
import iphone from '../img/iphone.svg';
import '../styles/header.css';
import '../styles/app.css';
import apple from '../img/218px-Apple_Computer_Logo_rainbow.svg.png';
import HeaderButton from './headerbutton';

class Header extends Component {

  render() {
    return (
      <div className="App--Header">
        <img src={apple} className="Header--logo" alt="logo" />
        <h2 className="Header--text">Привет! Я телефонный мастер Вася!</h2>
        <HeaderButton />
      </div>
    );
  }

}

export default Header;
