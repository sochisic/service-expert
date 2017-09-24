import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import darkBaseTheme from '../node_modules/material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from '../node_modules/material-ui/styles/getMuiTheme';
import MyButton from './MyButton';
import MyButton2 from './MyButton2';
import SimpleMap from './map';
import Social from './Social'
import iphone from './iphone.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App--header">
          <img src={iphone} className="Header--logo" alt="logo" />
          <h2 className="Header--text">Привет! Я телефонный мастер Вася!</h2>
          {/*}<img src={iphone} className="Iphone--logo" />*/}

        </div>
        <p className="App-intro">
          Хорошо что ты зашел на мой <code>сайт</code>, ты попал именно туда куда нужно!
        </p>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <MyButton />
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <MyButton2 />
        </MuiThemeProvider>
        <div className="SimpleMap">
          <SimpleMap />
        </div>
        <Social />
      </div>
    );
  }
}

export default App;
