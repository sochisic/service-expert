import React, { Component } from 'react';
import './maincontainer.css';
import '../firstscreen/firstscreen.css';

class MainContainer extends Component {
  render() {
    return (
      <div className="MainContainer">
        <h1>Профессиональный ремонт iPhone в городе Сочи</h1>
        <h1>Многолетний опыт работы с продукцией Apple</h1>
        <h2>Расположение: Центр г. Сочи, ТЦ Атриум 2 этаж, оф. 201</h2>
        <h2>тел. 8-900-000-12-12</h2>
      </div>
    );
  }
}

export default MainContainer;
