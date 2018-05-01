import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import './instagramcontainer.css';

const width = 320;

class InstagramEmbedContainer extends Component {
  render() {
    return (
      <div className="instagramContainer">
        <InstagramEmbed
          url="https://www.instagram.com/p/BiOjqN9FJrz"
          maxWidth={width}
          hideCaption={true}
          containerTagName="div"
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/BiOjNE5F7od"
          maxWidth={width}
          hideCaption={true}
          containerTagName="div"
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/BiOiHYalDEV"
          maxWidth={width}
          hideCaption={true}
          containerTagName="div"
        />
      </div>
    );
  }
}

export default InstagramEmbedContainer;
