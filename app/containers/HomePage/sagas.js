import {
  take,
  call,
  put,
} from 'redux-saga/effects';

import {
  SET_ADDRESS,
} from './constants';

import {
  setLatitudeLongitude,
} from './actions';

import geocode from '../../utils/geocode';

export function* setAddressResponder() {
  while (true) { // eslint-disable-line no-constant-condition
    const { address } = yield take(SET_ADDRESS);
    const { latitude, longitude } = yield call(geocode, address);
    yield put(setLatitudeLongitude(latitude, longitude));
  }
}

export default [
  setAddressResponder,
];
