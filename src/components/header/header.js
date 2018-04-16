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
    <img src={apple} className="Header--logo" alt="logo" />
    <h2 className="Header--text">Sochi Phone</h2>
    <HeaderButton drawerToggle={handleToggleDrawer} />
  </div>
));
