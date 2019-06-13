import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, GroundOverlay} from 'google-maps-react';
import { GoogleComponent } from 'react-google-location' 

const API_KEY = "AIzaSyDvWu69XjuxqaUQnd8ZWDl7QEtEQUwNRFY"

export class MapContainer extends Component {
  state = {
    place: null,
  }


 render() {
   { this.state.place == null 
   ? console.log(this.state.place, "true")
   : (console.log(this.state.place, "else"))
   }
  return (
    <>
    <div >
         <GoogleComponent
         
          apiKey={API_KEY}
          language={'en'}
          country={'country:us'}
          coordinates={true}
          // locationBoxStyle={'custom-style'}
          // locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>
     <Map google={this.props.google} zoom={10} initialCenter={{ lat: 34.0522, lng: -118.2437}} style={{ height: '40%', width: '60%'}}>
     {/* center={{ lat: this.state.place.coordinates.lat, lng: this.state.place.coordinates.lng */}
    <Marker onClick={this.onMarkerClick}
               name={'Current location'} />


     </Map>
     </>
   );
 }
}

export default GoogleApiWrapper({
 apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')})(MapContainer)