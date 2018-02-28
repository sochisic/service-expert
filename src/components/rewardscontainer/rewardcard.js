import React, { Component } from 'react';
import Accessibility from 'material-ui/svg-icons/action/accessibility';
import Build from 'material-ui/svg-icons/action/build';


import "../../styles/repaircontainer.css";

const iconStyles = {
  smallIcon: {
      width: 25,
      height: 25,
    },
    mediumIcon: {
      width: 48,
      height: 48,
      paddingTop: 14,
    },
    largeIcon: {
      width: 60,
      height: 60,
    },
    small: {
      width: 72,
      height: 72,
      padding: 16,
    },
    medium: {
      width: 96,
      height: 96,
      padding: 24,
    },
    large: {
      width: 120,
      height: 120,
      padding: 30,
    },
};

let size, icon;

export default class RewardCard extends Component {


  render() {

    console.log("Props object comin' up!");

    console.log(this.props);

    console.log("That was my props object!");

    if(this.props.size === 'large' || this.props.size === 'lg') {
     size = iconStyles.largeIcon;
    }

    if(this.props.size === 'small' || this.props.size === 'sm') {
      size = iconStyles.smallIcon;
    }

    if(this.props.size === 'medium' || this.props.size === 'md') {
      size = iconStyles.mediumIcon;
    }

    if(!this.props.size) {
      size = iconStyles.mediumIcon;
    }

    if(this.props.icon === 'build') {
      return (
        <div className="rewardCard">
          <Build style={size} className="rewardCardIcon" />
          <div className="rewardCardAmount">{this.props.amount}</div>
          <div className="rewardCardText">{this.props.text}</div>
        </div>
      );
    }

    if(this.props.icon === 'accessibility') {
      return (
        <div className="rewardCard">
          <Accessibility style={size} className="rewardCardIcon" />
          <div className="rewardCardAmount">{this.props.amount}</div>
          <div className="rewardCardText">{this.props.text}</div>
        </div>
      );
    }


  }
}
