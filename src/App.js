import React, { Component } from 'react';
import './styles/app.css';
import './components/firstscreen/firstscreen.css';
import './components/maincontainer/maincontainer.css';
import './components/buttoncontainer/buttoncontainer.css';
import RepairContainer from './components/repaircontainer/repaircontainer';
import SimpleMap from './components/map';
import FormContainer from './components/formcontainer';
import Social from './components/social/social';
import Footer from './components/footer';
import Drawer from './components/drawer';

import FirstScreen from './components/firstscreen/firstscreen';

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

        {/* <div className="App--secondscreen">
          <RepairContainer />
        </div>
        <SimpleMap />
        <FormContainer />
        <Social />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
