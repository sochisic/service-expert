import React, { Component } from "react";
import MultipleRepair from "../multiplerepair/multiplerepair";
import "../../styles/repaircontainer.css";
import Prices from "../../components/prices";
import MainContainer from "./maincontainer";
import ButtonContainer from "./buttoncontainer";





class RepairContainer extends Component {
  render() {
    return (
      <div className="App--RepairContainer">
        <MainContainer />
        <ButtonContainer />
      </div>
    );
  }
}

export default RepairContainer;
