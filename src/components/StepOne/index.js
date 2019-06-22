import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GoogleComponent } from 'react-google-location' 
import Button from '../Styles/Button'

import './StepOne.css'

const API_KEY = process.env.MAP_API_KEY;

export class StepOne extends Component {
  state = {
    place: null,
    lat: 34.0522,
    lng: -118.2437,
    address: ''
  }

	currentLat = () => {
		let searchlat = this.state.place.coordinates.lat;
		let searchlng = this.state.place.coordinates.lng;
		this.setState({
			lat: searchlat,
			lng: searchlng
		});
	};

  
 render() {

  return (
    <>
      <form>

        <div className="stepOneContainer">`
        <div className="stepStatus">
          <div>1</div>

          <span>Location<br />
          Enter the location of person in need</span>
          
        </div>
          <div className="locatorContainer">
            <GoogleComponent
                apiKey={API_KEY}
                language={'en'}
                country={'country:us'}
                coordinates={true}
                onChange={(e) => { this.setState({ lat: e.coordinates.lat, lng: e.coordinates.lng, address: e.place}) }} 
                onClick={this.currentLat}
                />
          </div>
            <div className="mapContainer">
              <Map google={this.props.google} zoom={12} initialCenter={{ lat: 34.0522, lng: -118.2437}} center= {{lat: this.state.lat, lng:this.state.lng}} style={{ height: '40%', width: '60%'}}>
                <Marker onClick={this.onMarkerClick} name={'Current location'} lat={this.state.lat} lng={this.state.lng}/>
              </Map>
            </div>  
            <div className="requestContainer">
              Description of Location
              <br/>
              <textarea type="text" name="location" onChange={this.props.changeHandler} value={this.props.location}/>
            </div>
              <button type="submit" className="continueButton" onClick={(e) => this.props.stepOneClick(e)}>Continue</button>
        </div>
      
      </form>
    </>
  );
 }
}

export default GoogleApiWrapper({
 apiKey: (process.env.MAP_API_KEY2)})(StepOne)
