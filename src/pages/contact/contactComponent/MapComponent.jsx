import React, { useRef, useEffect, useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

const render = (status) => {
  if (status === Status.LOADING) return <div>Loading...</div>;
  if (status === Status.FAILURE) return <div>Error loading maps</div>;
  return null;
};

const MyMapComponent = () => {
  const mapRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  const defaultLocation = { lat: 37.7749, lng: -122.4194 }; // Default location (e.g., San Francisco)

  useEffect(() => {
    // Get the current position of the user
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      },
      () => {
        // Use the default location if geolocation fails
        setCurrentLocation(defaultLocation);
      }
    );
  }, []);

  useEffect(() => {
    if (mapRef.current && currentLocation) {
      // Initialize the map with the current location
      const map = new window.google.maps.Map(mapRef.current, {
        center: currentLocation,
        zoom: 15,
      });

      // Add a marker at the current location
      new window.google.maps.Marker({
        position: currentLocation,
        map,
        title:
          currentLocation === defaultLocation
            ? 'Default Location'
            : 'You are here!',
      });
    }
  }, [currentLocation]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

const MapComponent = () => {
  return (
    <Wrapper apiKey="AIzaSyBp_FyAlI4flfft2s_vo-oK3M5d4hR1ZCo" render={render}>
      <MyMapComponent />
    </Wrapper>
  );
};

export default MapComponent;
