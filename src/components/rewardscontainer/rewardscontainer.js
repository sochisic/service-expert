import React, { Component } from 'react';
import '../../styles/repaircontainer.css';
import './rewardscontainer.css';
import RewardCard from './rewardcard';
import { rewardsCONST } from './rewardsCONST';
import Divider from 'material-ui/Divider';

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

const style = {
  backgroundColor: '#FFCC80',
  height: 2,
  marginTop: 50,
  marginBottom: 50,
};

class Rewards extends Component {
  render() {
    return (
      <div className="rewardsContainer">
        <RewardCard
          size="large"
          icon="accessibility"
          amount={rewardsCONST.accessibility.amount}
          text={rewardsCONST.accessibility.text}
        />
        <RewardCard size="large" icon="build" amount={rewardsCONST.build.amount} text={rewardsCONST.build.text} />
        <RewardCard
          size="large"
          icon="accessibility"
          amount={rewardsCONST.accessibility.amount}
          text={rewardsCONST.accessibility.text}
        />
        <Divider style={style} />
      </div>
    );
  }
}

export default Rewards;
