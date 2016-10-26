/*
 * HomeReducer
 */

import { fromJS } from 'immutable';
import {
  SET_ADDRESS,
  SET_HOURLY_FORECASTS,
  SET_FORECAST,
} from './constants';

const initialState = fromJS({
  address: '',
  hourlyForecasts: false,
  forecast: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ADDRESS:
      return state
        .set('address', action.address);
    case SET_HOURLY_FORECASTS:
      return state
      .set('hourlyForecasts', action.hourlyForecasts)
      .set('forecast', action.hourlyForecasts[0]);
    case SET_FORECAST:
      return state
      .set('forecast', action.forecast);
    default:
      return state;
  }
}

export default homeReducer;
