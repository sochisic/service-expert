import React, { Component } from 'react';
import "../../styles/repaircontainer.css";
import "./rewardscontainer.css";
import RewardCard from "./rewardcard";
import { rewardsCONST } from './rewardsCONST';

console.log(rewardsCONST);

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


class Rewards extends Component {

  render() {
    return (
      <div className="rewardsContainer">
        <RewardCard size="large" icon="accessibility" amount={rewardsCONST.accessibility.amount} text={rewardsCONST.accessibility.text} />
        <RewardCard size="large" icon="build" amount={rewardsCONST.build.amount} text={rewardsCONST.build.text} />
        <RewardCard size="large" icon="accessibility" amount={rewardsCONST.accessibility.amount} text={rewardsCONST.accessibility.text} />
      </div>

    );
  }

}

export default Rewards;
