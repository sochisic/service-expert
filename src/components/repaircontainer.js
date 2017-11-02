import React, { Component } from "react";
import MultipleRepair from "./multiplerepair/multiplerepair";
import "../styles/repaircontainer.css";
import Prices from "../components/prices";
import MainContainer from "./maincontainer/maincontainer";
import RaisedButton from "../../node_modules/material-ui/RaisedButton";
import Message from "../../node_modules/material-ui/svg-icons/communication/message";
import Cost from "../../node_modules/material-ui/svg-icons/editor/attach-money";
import FlatButton from "../../node_modules/material-ui/RaisedButton";



const styles = {
  button: {
    margin: 12,
  },
costbutton: {
  label: {
    color: 'white',
  },
  root: {
    border: '1px solid white'

  },
  bg: {
    backgroundColor: 'rgba(#ffffff, 0)',
    border: '1px solid white'
  }

}
};

class RepairContainer extends Component {
  render() {
    return (
      <div className="App--RepairContainer">
        <MainContainer />
        <RaisedButton
          label="Связаться с нами"
          labelPosition="after"
          primary={false}
          icon={<Message />}
          style={styles.button}
          className="RepairContainer--button"
          backgroundColor="#2196F3"
          labelStyle={styles.costbutton.label}
        />
        <FlatButton
          label="Сколько стоит?"
          labelPosition="after"
          primary={false}
          icon={<Cost />}
          style={styles.costbutton.bg}
          labelStyle={styles.costbutton.label}
          className="RepairContainer--costbutton"
          backgroundColor="hsla(0, 0%, 100%, 0)"
        />
      </div>
    );
  }
}

export default RepairContainer;
