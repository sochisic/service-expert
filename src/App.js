import React, { Component } from 'react';
import './styles/app.css';
import './styles/appwraper.css';
import Header from './components/header';
import Intro from './components/intro.js';
import RepairContainer from './components/repaircontainer';
import Content from './components/content';
import SimpleMap from './components/map';
import FormContainer from './components/formcontainer';
import Social from './components/social'
import Footer from './components/footer';





class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App--Wrapper">
          <Header />
          <RepairContainer />
        </div>
        <SimpleMap />
        <FormContainer />
        <Social />
        <Footer />
      </div>
        );
  }
}

export default App;
