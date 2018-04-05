import React, { Component } from 'react';
import '../../styles/repaircontainer.css';
import InstagramEmbed from 'react-instagram-embed';

class InstagramCard extends Component {
  render() {
    return (
      <div className="instagramCard">
        <InstagramEmbed {...this.props} />
      </div>
    );
  }
}

export default InstagramCard;
