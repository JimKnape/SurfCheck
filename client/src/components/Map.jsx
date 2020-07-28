import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InforWIndow,
} from "@react-google-maps/api";
import key from '../../../mapAPI';

const mapContainerStyle = {
  height: "372px",
};

const center = {
  lat: 48.253810,
  lng: -123.8741682,
}

const SurfMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key,
  });
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  
  return ( 
    <div>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}></GoogleMap>
    </div>
  )
}

export default SurfMap;