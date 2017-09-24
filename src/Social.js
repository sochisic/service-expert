import React, { Component } from 'react';
import inst from './instagram.svg';
import Dialog from '../node_modules/material-ui/Dialog';
import FlatButton from '../node_modules/material-ui/FlatButton';
import RaisedButton from '../node_modules/material-ui/RaisedButton';
import DialogModal from './DialogModal';

class Social extends Component {
  constructor(props) {
    super(props);
    this.transition = this.transition.bind(this);
  }


  transition(e) {

    e.preventDefault();
    }




  render() {
    return (
      <div>
        <a href="" onClick={this.transition} target="_blank">
          <img className="Instagram--logo" alt="Instagramm"  src={inst} />
        </a>
      </div>
    );
  }

}

export default Social;
