/*
 * Home Actions
 */

import {
  SET_ADDRESS,
  SET_LATITUDE_LONGITUDE,
  SET_FORECAST,
  SET_CURRENT_CONDITIONS,
  SET_CONDITIONS,
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

export function setCurrentConditions(currentConditions) {
  return {
    type: SET_CURRENT_CONDITIONS,
    currentConditions,
  };
}

export function setConditions(conditions) {
  return {
    type: SET_CONDITIONS,
    conditions,
  };
}
