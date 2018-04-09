import React, { Component } from 'react';

import './styles/app.css';
import './components/maincontainer/maincontainer.css';
import './components/buttoncontainer/buttoncontainer.css';
import './components/rewardscontainer/rewardscontainer.css';
import Social from './components/social/social';
import Footer from './components/footer';
import Drawer from './components/drawer';
import RewardsContainer from './components/rewardscontainer/rewardscontainer';

import FirstScreen from './components/firstscreen/firstscreen';
import styles from './components/firstscreen/firstscreen.css';

import ForthScreen from './components/ForthScreen/ForthScreen';
import './components/ForthScreen/ForthScreen.css';

import InstagramEmbedContainer from './components/instagramcontainer/instagramcontainer';
import './components/instagramcontainer/instagramcontainer.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div className="App">
        <FirstScreen />
        <Drawer open={this.state.open} drawerToggle={this.handleToggle} />
        <RewardsContainer />
        <InstagramEmbedContainer />
        <ForthScreen />
        {/*<FormContainer />
        <Social />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
