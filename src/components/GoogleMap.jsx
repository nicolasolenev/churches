import React, { useState, useCallback, useEffect } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import { API_KEY, INITIAL_CITY_COORDS } from '../vars';
import InfoWindowRow from './InfoWindowRow';
import InfoWindowRowLink from './InfoWindowRowLink';

export function MapContainer({ google, coords, churches }) {
  const [activeMarker, setActiveMarker] = useState({});
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [churchData, setChurchData] = useState({});

  useEffect(() => {
    console.log(coords);
  });

  const onMarkerClick = useCallback(
    (props, marker) => {
      setActiveMarker(marker);
      setShowingInfoWindow(true);
      setChurchData(churches[props.id]);
    },
    [churches]
  );

  const onInfoWindowClose = () => {
    setActiveMarker(null);
    setShowingInfoWindow(false);
  };

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
            id={id}
            onClick={onMarkerClick}
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
          <InfoWindowRow type="name" text={churchData.name} />
          <InfoWindowRow type="address" text={churchData.address} />
          <InfoWindowRow type="phone" text={churchData.phone} />
          <InfoWindowRowLink text={churchData.url} />
        </div>
      </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapContainer);
