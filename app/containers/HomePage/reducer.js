/*
 * HomeReducer
 */

import { fromJS } from 'immutable';
import {
  SET_ADDRESS,
  SET_LOCATIONS,
  SET_LOCATION,
  SET_FORECASTS,
  SET_FORECAST,
} from './constants';

const initialState = fromJS({
  address: '',
  locations: false,
  coordinates: false,
  forecasts: false,
  forecast: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ADDRESS:
      return state
        .set('address', action.address)
        .set('locations', false)
        .set('coordinates', false)
        .set('forecasts', false)
        .set('forecast', false);
    case SET_LOCATIONS:
      return state
        .set('locations', action.locations);
    case SET_LOCATION:
      return state
        .set('address', action.formattedAddress)
        .set('coordinates', action.coordinates)
        .set('locations', false);
    case SET_FORECASTS:
      return state
      .set('forecasts', action.forecasts)
      .set('forecast', action.forecasts[0]);
    case SET_FORECAST:
      return state
      .set('forecast', action.forecast);
    default:
      return state;
  }
}

export default homeReducer;
