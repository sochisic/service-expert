import React, { Component } from "react";
import FlatButton from "material-ui/RaisedButton";
import RaisedButton from "material-ui/RaisedButton";
import Message from "material-ui/svg-icons/communication/message";
import Cost from "material-ui/svg-icons/editor/attach-money";
import "../../styles/repaircontainer.css"
// import { rewind } from '../actions/actions';


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
          labelPosition="after"
          primary={true}
          icon={<Message />}
          style={styles.button}
          className="RepairContainer--button"
          labelStyle={styles.costbutton.label}
          onClick={ ()=>{} }
        />
        <RaisedButton
					label="Сколько стоит?"
					onClick={() => {}}
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
