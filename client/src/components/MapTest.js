import React from 'react';
import Map from './MapDirection';

const googleMapsApiKey = "AIzaSyATvJNsRqI8PPoDyJhraqzuMODorXqDsMk";

export const MapTest = props => {
  const {places} = props;

  const {
    loadingElement,
    containerElement,
    mapElement,
    defaultCenter,
    defaultZoom
  } = props;

  return (
    <Map
      googleMapURL={
        `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=geometry,drawing,places`
      }
      markers={places}
      loadingElement={loadingElement || <div style={{height: `100%`}}/>}
      containerElement={containerElement || <div style={{height: "380px"}}/>}
      mapElement={mapElement || <div style={{height: `100%`,borderRadius:`15px`}}/>}
      defaultCenter={defaultCenter || {lat: 19.0760, lng: 72.8777}}
      defaultZoom={defaultZoom || 11}
    />
  );
};


