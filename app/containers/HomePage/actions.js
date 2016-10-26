/*
 * Home Actions
 */

import {
  SET_ADDRESS,
  SET_HOURLY_FORECASTS,
  SET_FORECAST,
} from './constants';

export function setAddress(address) {
  return {
    type: SET_ADDRESS,
    address,
  };
}

export function setHourlyForecasts(hourlyForecasts) {
  return {
    type: SET_HOURLY_FORECASTS,
    hourlyForecasts,
  };
}

export function setForecast(forecast) {
  return {
    type: SET_FORECAST,
    forecast,
  };
}
