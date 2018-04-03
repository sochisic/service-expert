import React, { Component } from 'react';
import MainContainer from '../maincontainer/maincontainer';
import ButtonContainer from '../buttoncontainer/buttoncontainer';
import Header from '../header/header';
import './firstscreen.css';
import '../header/header.css';
import '../buttoncontainer/buttoncontainer.css';
import '../../styles/app.css';

class FirstScreen extends Component {
  render() {
    return (
      <div className="App--firstscreen">
        <Header drawerToggle={this.handleToggle} />
        <MainContainer />
        <ButtonContainer />
      </div>
    );
  }
}

export default FirstScreen;
