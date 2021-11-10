import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';

export const useGeolocation = () => {
  const [location, setLocation] = useState<any>();

  const getGeolocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const currentLocation = {latitude: lat, longitude: lon};
        setLocation(currentLocation);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    getGeolocation();
  }, []);

  return location;
};
