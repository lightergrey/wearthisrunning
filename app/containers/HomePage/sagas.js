import {
  take,
  call,
  put,
} from 'redux-saga/effects';

import {
  SET_ADDRESS,
  SET_CURRENT_CONDITIONS,
} from './constants';

import {
  setLatitudeLongitude,
  setForecast,
  setCurrentConditions,
  setConditions,
  setRecommendations,
} from './actions';

import getGeocode from '../../utils/getGeocode';
import getForecast from '../../utils/getForecast';
import getConditions from '../../utils/getConditions';
import getRecommendations from '../../utils/getRecommendations';

export function* setCurrentConditionsResponder() {
  while (true) { // eslint-disable-line no-constant-condition
    const { currentConditions } = yield take(SET_CURRENT_CONDITIONS);
    const { conditions } = yield call(getConditions, currentConditions);
    yield put(setConditions(conditions));
    const { recommendations } = yield call(getRecommendations, currentConditions);
    yield put(setRecommendations(recommendations));
  }
}

export function* setAddressResponder() {
  while (true) { // eslint-disable-line no-constant-condition
    const { address } = yield take(SET_ADDRESS);
    const { latitude, longitude } = yield call(getGeocode, address);
    yield put(setLatitudeLongitude(latitude, longitude));
    const { forecast } = yield call(getForecast, latitude, longitude);
    yield put(setForecast(forecast));
    const currentConditions = forecast[0];
    yield put(setCurrentConditions(currentConditions));
  }
}

export default [
  setAddressResponder,
  setCurrentConditionsResponder,
];
