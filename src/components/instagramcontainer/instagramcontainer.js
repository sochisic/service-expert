import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import './instagramcontainer.css';

const width = 320;

class InstagramEmbedContainer extends Component {
  render() {
    return (
      <div className="instagramContainer">
        <InstagramEmbed
          url="https://www.instagram.com/p/BfMZj_0ARFy"
          maxWidth={width}
          hideCaption={true}
          containerTagName="div"
          protocol=""
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/BfMZc5TABWt"
          maxWidth={width}
          hideCaption={true}
          containerTagName="div"
          protocol=""
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/BfMZDGmAZt9"
          maxWidth={width}
          hideCaption={true}
          containerTagName="div"
          protocol=""
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
    );
  }
}

export default InstagramEmbedContainer;
