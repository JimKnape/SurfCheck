import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InforWIndow,
} from "@react-google-maps/api";
import key from '../../../mapAPI';
// import { makeLoadScriptUrl } from '@react-google-maps/api/dist/utils/make-load-script-url';

const mapContainerStyle = {
  height: "375px",
};

const center = {
  lat: 48.253810,
  lng: -123.8741682,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: true,
  draggableCursor: 'default',
}

const SurfMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key,
  });

  const [markers, setMarkers] = React.useState([]);

  const onMapClick = React.useCallback((event) => {
    setMarkers(current => [...current, {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      time: new Date(),
    }])
  })

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  
  return ( 
    <div>
      <h3 id="surfbreak-emoji">Surfbreaks
        <span role="img" aria-label="wave">🌊</span>
      </h3>
      <GoogleMap 
        options={options} 
        mapContainerStyle={mapContainerStyle} 
        zoom={10} 
        center={center}
        onClick={onMapClick}
      >
        {markers.map(marker => {
          return (
            <Marker 
              key={marker.time.toISOString()} 
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: "/wave.svg", 
                scaledSize: new window.google.maps.Size(20, 20),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(10, 10),
              }}
            />
          )
        })}
      </GoogleMap>
    </div>
  )
}

export default SurfMap;