import React, { Component } from 'react';
import InstagramCard from './instagramcard';
import "./instagramcontainer.css";

class InstagramEmbedContainer extends Component {

  render() {
    return (
      <div className="instagramContainer">
        <InstagramCard
          url='https://www.instagram.com/p/BfMZj_0ARFy'
          maxWidth={320}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        <InstagramCard
          url='https://www.instagram.com/p/BfMZc5TABWt'
          maxWidth={320}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        <InstagramCard
          url='https://www.instagram.com/p/BfMZDGmAZt9'
          maxWidth={320}
          hideCaption={true}
          containerTagName='div'
          protocol=''
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
