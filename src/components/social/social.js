import React from 'react';
import inst from './instagram.svg';
import vk from './VK.svg';
import gmaps from './gmaps.svg';
import './social.css';

const Social = () => (
  <div className="App--social">
    <a
      href="https://www.instagram.com/sochi_service/"
      title="Instagram Васи Мастера"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="social--logo" src={inst} alt="Instagramm" />
    </a>
    <a href="https://vk.com" title="VK Васи Мастера" target="_blank">
      <img className="social--logo" src={vk} alt="vk" />
    </a>
    <a
      href="https://www.google.ru/maps/place/%D0%AD%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82+%D0%A1%D0%B5%D1%80%D0%B2%D0%B8%D1%81/@43.588413,39.7238993,15z/data=!4m5!3m4!1s0x0:0x60b13113becfd9a0!8m2!3d43.588413!4d39.7238993"
      title="VK Васи Мастера"
      target="_blank"
    >
      <img className="social--logo" src={gmaps} alt="google maps" />
    </a>
  </div>
);

export default Social;
