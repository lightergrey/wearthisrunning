import {
  take,
  call,
  put,
} from 'redux-saga/effects';

import {
  SET_ADDRESS,
  SET_LOCATION,
} from './constants';

import {
  setForecasts,
  setLocations,
} from './actions';

import request from 'utils/request';

export function* setAddressResponder() {
  while (true) { // eslint-disable-line no-constant-condition
    const { address } = yield take(SET_ADDRESS);
    const { data: locations } = yield call(request, `/geocode-api/${address}`);
    yield put(setLocations(locations));
  }
}

export function* setLocationResponder() {
  while (true) { // eslint-disable-line no-constant-condition
    const { coordinates: { latitude, longitude } } = yield take(SET_LOCATION);
    const { data: { hourly: { data: forecasts } } } = yield call(request, `/forecast-api/${latitude}/${longitude}`);
    yield put(setForecasts(forecasts));
  }
}

export default [
  setAddressResponder,
  setLocationResponder,
];
