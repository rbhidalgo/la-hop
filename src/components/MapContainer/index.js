import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, GroundOverlay} from 'google-maps-react';

export class MapContainer extends Component {
 render() {
   return (
     
     <Map google={this.props.google} zoom={10} initialCenter={{ lat: 34.0522, lng: -118.2437  }} style={{ height: '40%', width: '60%'}}>

    <Marker onClick={this.onMarkerClick}
               name={'Current location'} />


     </Map>
   );
 }
}

export default GoogleApiWrapper({
 apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')})(MapContainer)