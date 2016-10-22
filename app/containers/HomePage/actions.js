/*
 * Home Actions
 */

import {
  SET_ADDRESS,
  SET_LATITUDE_LONGITUDE,
  SET_FORECAST,
} from './constants';

export function setAddress(address) {
  return {
    type: SET_ADDRESS,
    address,
  };
}

export function setLatitudeLongitude(latitude, longitude) {
  return {
    type: SET_LATITUDE_LONGITUDE,
    latitude,
    longitude,
  };
}

export function setForecast(forecast) {
  return {
    type: SET_FORECAST,
    forecast,
  };
}
