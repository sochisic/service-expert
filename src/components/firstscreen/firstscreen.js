import React, { Component } from 'react';
import MainContainer from '../maincontainer/maincontainer';
import ButtonContainer from '../buttoncontainer/buttoncontainer';
import Header from '../header/header';
import './firstscreen.css';

class FirstScreen extends Component {
  render() {
    return (
      <div className="App--firstScreen">
        <Header drawerToggle={this.handleToggle} />
        <MainContainer />
        <ButtonContainer />
      </div>
    );
  }
}

export default FirstScreen;
