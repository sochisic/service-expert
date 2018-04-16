import React from 'react';
import './header.css';
import '../../styles/app.css';
import apple from '../../img/Apple-logo-white-md.png';
import HeaderButton from './headerbutton';
import { connect } from 'redux-zero/react';

import actions from '../actions/actions';

const mapToProps = ({}) => ({});

export default connect(mapToProps, actions)(({ handleToggleDrawer }) => (
  <div className="App--Header" id="Header">
    <div className="Header--logo">
      <img src={apple} alt="logo" />
    </div>
    <div className="Header--text">
      <h2>Sochi Phone</h2>
    </div>
    <HeaderButton drawerToggle={handleToggleDrawer} />
  </div>
));
