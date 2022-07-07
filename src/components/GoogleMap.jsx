import React, { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import { API_KEY, INITIAL_CITY_COORDS } from '../vars';
import InfoWindowRow from './InfoWindowRow';
import InfoWindowRowLink from './InfoWindowRowLink';

export function MapContainer({ google, coords, churches }) {
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  function onMarkerClick(props, marker) {
    setActiveMarker(marker);
    setSelectedPlace(props);
    setShowingInfoWindow(true);
  }

  function onInfoWindowClose() {
    setActiveMarker(null);
    setShowingInfoWindow(false);
  }

  return (
    <Map
      google={google}
      center={{
        lat: coords ? coords[0] : INITIAL_CITY_COORDS[0],
        lng: coords ? coords[1] : INITIAL_CITY_COORDS[1],
      }}
      zoom={13}
    >
      {churches.map((church, id) => {
        return (
          <Marker
            key={id}
            onClick={onMarkerClick}
            name={`name: ${church.name}`}
            position={{ lat: church.latitude, lng: church.longitude }}
          />
        );
      })}

      <InfoWindow
        marker={activeMarker}
        onClose={onInfoWindowClose}
        visible={showingInfoWindow}
      >
        <div>
          <InfoWindowRow
            type="name"
            churches={churches}
            selectedPlace={selectedPlace}
          />

          <InfoWindowRow
            type="address"
            churches={churches}
            selectedPlace={selectedPlace}
          />

          <InfoWindowRow
            type="phone"
            churches={churches}
            selectedPlace={selectedPlace}
          />

          <InfoWindowRowLink
            churches={churches}
            selectedPlace={selectedPlace}
          />
        </div>
      </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapContainer);
