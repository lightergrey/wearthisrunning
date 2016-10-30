/*
 * Home Actions
 */

import {
  SET_ADDRESS,
  SET_LOCATIONS,
  SET_LOCATION,
  SET_FORECASTS,
  SET_FORECAST,
} from './constants';

export function setAddress(address) {
  return {
    type: SET_ADDRESS,
    address,
  };
}

export function setLocations(locations) {
  return {
    type: SET_LOCATIONS,
    locations,
  };
}

export function setLocation({ formattedAddress, latitude, longitude }) {
  const coordinates = { latitude, longitude };
  return {
    type: SET_LOCATION,
    formattedAddress,
    coordinates,
  };
}

export function setForecasts(forecasts) {
  return {
    type: SET_FORECASTS,
    forecasts,
  };
}

export function setForecast(forecast) {
  return {
    type: SET_FORECAST,
    forecast,
  };
}
