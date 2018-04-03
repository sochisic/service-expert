import React, { Component } from 'react';
import '../../styles/repaircontainer.css';
import RewardsContainer from '../rewardscontainer/rewardscontainer';
import InstagramEmbedContainer from '../instagramcontainer/instagramcontainer';
import '../instagramcontainer/instagramcontainer.css';
import Divider from 'material-ui/Divider';

const style = {
  backgroundColor: '#FFCC80',
  height: 2,
  marginTop: 50,
  marginBottom: 50,
};

class RepairContainer extends Component {
  render() {
    return (
      <div className="App--RepairContainer">
        <Divider style={style} />
        <RewardsContainer />
        <Divider style={style} />
        <InstagramEmbedContainer />
        <Divider style={style} />
      </div>
    );
  }
}

export default RepairContainer;
