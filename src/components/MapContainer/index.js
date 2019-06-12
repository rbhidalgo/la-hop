import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';

export class MapContainer extends Component {
 render() {
   return (
     <Map google={this.props.google} zoom={14} defaultCenter={{ lat: 34.0522, lng: 118.2437 }}>

    <Marker onClick={this.onMarkerClick}
               name={'Current location'} />

       <InfoWindow onClose={this.onInfoWindowClose}>
           <div>
             {/* <h1>{this.state.selectedPlace.name}</h1> */}
           </div>
       </InfoWindow>
     </Map>
   );
 }
}

export default GoogleApiWrapper({
 apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')
})(MapContainer)