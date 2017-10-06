import React, { Component } from 'react';
import GoogleMapReact from '../../node_modules/google-map-react';
import iphone from '../img/iphone.svg';
import '../styles/app.css';

const AnyReactComponent = ({ text }) => (
    <div style={{
      position: 'relative',
    }}>
      <img src={iphone} style={{
        height: 40,

        top: 0,
        left: 0,

      }} />
    </div>
);

export default class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 43.5880449, lng: 39.7235089},
    zoom: 15
  };

  render() {
    return (
      <div className="App--SimpleMap">
        <GoogleMapReact

          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={43.5880449}
            lng={39.7235089}
            text={'Телефонный мастер Вася!'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
