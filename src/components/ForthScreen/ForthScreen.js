import React, { Component } from 'react';
import FormContainer from '../formcontainer/formcontainer';
import Social from '../social/social';
import styles from './ForthScreen.css';

class ForthScreen extends Component {
  render() {
    return (
      <div className="App--forthscreen">
        <FormContainer />
        <Social />
      </div>
    );
  }
}

export default ForthScreen;
