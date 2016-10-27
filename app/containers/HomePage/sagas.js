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

import getGeocode from '../../utils/getGeocode';
import getForecast from '../../utils/getForecast';

export function* setAddressResponder() {
  while (true) { // eslint-disable-line no-constant-condition
    const { address } = yield take(SET_ADDRESS);
    const { latitude, longitude } = yield call(getGeocode, address);
    const { hourlyForecasts } = yield call(getForecast, latitude, longitude);
    yield put(setHourlyForecasts(hourlyForecasts));
  }
}

export default [
  setAddressResponder,
];
