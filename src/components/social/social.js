import React, { Component } from 'react';
import inst from '../../img/instagram.svg';
import vk from '../../img/VK.svg';
import './social.css';


class Social extends Component {

  render() {
    return (
      <div className="App--Social">
        <a href="https://www.instagram.com/sochi_service/"  title="Instagram Васи Мастера" target="_blank" rel="noopener noreferrer">
          <img className="social--logo" src={inst} alt="Instagramm" />
        </a>
        <a href="https://vk.com" title="VK Васи Мастера" target="_blank">
          <img className="social--logo" src={vk} alt="vk" />
        </a>
      </div>
    );
  }

}

export default Social;
