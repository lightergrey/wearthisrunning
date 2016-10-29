import {
  take,
  call,
  put,
} from 'redux-saga/effects';

import {
  SET_ADDRESS,
} from './constants';

import {
  setHourlyForecasts,
} from './actions';

import request from 'utils/request';

export function* setAddressResponder() {
  while (true) { // eslint-disable-line no-constant-condition
    const { address } = yield take(SET_ADDRESS);
    const { data: [{ latitude, longitude }] } = yield call(request, `/geocode-api/${address}`);
    const { data: { hourly: { data: hourlyForecasts } } } = yield call(request, `/forecast-api/${latitude}/${longitude}`);
    yield put(setHourlyForecasts(hourlyForecasts));
  }
}

export default [
  setAddressResponder,
];
