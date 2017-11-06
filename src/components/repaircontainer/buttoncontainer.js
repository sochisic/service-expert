import React, { Component } from "react";
import FlatButton from "../../../node_modules/material-ui/RaisedButton";
import RaisedButton from "../../../node_modules/material-ui/RaisedButton";
import Message from "../../../node_modules/material-ui/svg-icons/communication/message";
import Cost from "../../../node_modules/material-ui/svg-icons/editor/attach-money";
import "../../styles/repaircontainer.css"


const styles = {
  button: {
    margin: 12
  },
  costbutton: {
    label: {
      color: "white"

    },
    root: {
      border: "1px solid white"
    },
    bg: {
      backgroundColor: "rgba(#ffffff, 0)",
      border: "1px solid white",
      margin: 12
    }
  }
};

class ButtonContainer extends Component {
  render() {
    return (
      <div className="RepairContainer--ButtonContainer">
        <RaisedButton
          label="Связаться с нами"
          labelPosition="before"
          primary={true}
          icon={<Message />}
          style={styles.button}
          className="RepairContainer--button"
          labelStyle={styles.costbutton.label}
        />
        <RaisedButton
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

export default ButtonContainer;
