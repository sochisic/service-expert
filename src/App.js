import React, { Component } from "react";
import "./styles/app.css";
import "./styles/appwraper.css";
import "./components/repaircontainer/maincontainer.css"
import Header from "./components/header";
import Intro from "./components/intro.js";
import RepairContainer from "./components/repaircontainer/repaircontainer";
import Content from "./components/content";
import SimpleMap from "./components/map";
import FormContainer from "./components/formcontainer";
import Social from "./components/social/social";
import Footer from "./components/footer";
import Drawer from "./components/drawer";



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
        <div className="App--Wrapper">
          <Header drawerToggle={this.handleToggle} />
          <RepairContainer />
          <Drawer open={this.state.open} drawerToggle={this.handleToggle} />
        </div>
        <SimpleMap />
        <FormContainer />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default App;
