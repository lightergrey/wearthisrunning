/*
 * Home Actions
 */

import {
  SET_ADDRESS,
  SET_LATITUDE_LONGITUDE,
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
