import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import phones from './phonesCONST';
import './repairdialogcontent.css';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const RenderMenuItem = ({ arr }) => (
  <React.Fragment>{arr.map(element => <MenuItem key={element.key}>{element.name}</MenuItem>)}</React.Fragment>
);

class RepairDialogContent extends Component {
  render() {
    return (
      <div className="RepairDialogContent__Container">
        <div className="RepairDialogContent__image">
          <img src={phones[0].img} width="300" height="300" alt={phones[0].name} title={phones[0].name} />
        </div>
        <div className="RepairDialogContent__text">
          <Paper style={style}>
            <Menu autoWidth={true}>
              <RenderMenuItem arr={phones} />
            </Menu>
          </Paper>
        </div>
      </div>
    );
  }
}

export default RepairDialogContent;
