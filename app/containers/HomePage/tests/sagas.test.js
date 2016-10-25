/**
 * Test the Home sagas
 */

import expect from 'expect';
import {
  call,
  put,
  take,
} from 'redux-saga/effects';

import getGeocode from '../../../utils/getGeocode';
import getForecast from '../../../utils/getForecast';
import getConditions from '../../../utils/getConditions';
import getRecommendations from '../../../utils/getRecommendations';

import {
  SET_ADDRESS,
  SET_CURRENT_CONDITIONS,
} from '../constants';

import {
  setLatitudeLongitude,
  setForecast,
  setCurrentConditions,
  setConditions,
  setRecommendations,
} from '../actions';

import {
  setAddressResponder,
  setCurrentConditionsResponder,
} from '../sagas';

describe('setAddressResponder', () => {
  const generator = setAddressResponder();

  it('should take SET_ADDRESS action', () => {
    expect(
      generator.next().value
    ).toEqual(
      take(SET_ADDRESS)
    );
  });

  it('should call getGeocode', () => {
    const address = '';
    expect(
      generator.next({ address }).value
    ).toEqual(
      call(getGeocode, address)
    );
  });

  it('should dispatch latitude and longitude', () => {
    const latitude = 0;
    const longitude = 0;
    expect(
      generator.next({ latitude, longitude }).value
    ).toEqual(
      put(setLatitudeLongitude(latitude, longitude))
    );
  });

  it('should call getForecast', () => {
    const latitude = 0;
    const longitude = 0;
    expect(
      generator.next({ latitude, longitude }).value
    ).toEqual(
      call(getForecast, latitude, longitude)
    );
  });

  it('should dispatch forecast', () => {
    const forecast = [{ time: '' }];
    expect(
      generator.next({ forecast }).value
    ).toEqual(
      put(setForecast(forecast))
    );
  });

  it('should dispatch currentConditions', () => {
    const currentConditions = { time: '' };
    expect(
      generator.next({ currentConditions }).value
    ).toEqual(
      put(setCurrentConditions(currentConditions))
    );
  });
});

describe('setCurrentConditionsResponder', () => {
  const generator = setCurrentConditionsResponder();

  it('should take SET_CURRENT_CONDITIONS action', () => {
    expect(
      generator.next().value
    ).toEqual(
      take(SET_CURRENT_CONDITIONS)
    );
  });

  it('should call getConditions', () => {
    const currentConditions = {};
    expect(
      generator.next({ currentConditions }).value
    ).toEqual(
      call(getConditions, currentConditions)
    );
  });

  it('should dispatch conditions', () => {
    const conditions = [];
    expect(
      generator.next({ conditions }).value
    ).toEqual(
      put(setConditions(conditions))
    );
  });

  it('should call getRecommendations', () => {
    const currentConditions = {};
    expect(
      generator.next({ currentConditions }).value
    ).toEqual(
      call(getRecommendations, currentConditions)
    );
  });

  it('should dispatch recommendations', () => {
    const recommendations = [];
    expect(
      generator.next({ recommendations }).value
    ).toEqual(
      put(setRecommendations(recommendations))
    );
  });
});
