import React, { Component } from 'react';
import MultipleRepair from './multiplerepair';
import '../styles/repaircontainer.css';
import '../styles/appwraper.css';
import Prices from '../components/prices';


class RepairContainer extends Component {

  render() {
    return (
      <div className="App--RepairContainer">

        <MultipleRepair />

      </div>
    );
  }

}

export default RepairContainer;
