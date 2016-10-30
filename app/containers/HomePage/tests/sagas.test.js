/**
 * Test the Home sagas
 */

import expect from 'expect';
import {
  call,
  put,
  take,
} from 'redux-saga/effects';

import {
  SET_ADDRESS,
  SET_LOCATION,
} from '../constants';

import {
  setForecasts,
  setLocations,
} from '../actions';

import request from '../../../utils/request';

import {
  setAddressResponder,
  setLocationResponder,
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

  it('should call request geocode', () => {
    const address = 'Brooklyn, NY';
    expect(
      generator.next({ address }).value
    ).toEqual(
      call(request, `/geocode-api/${address}`)
    );
  });

  it('should dispatch setLocations', () => {
    const locations = [{ time: '' }];
    expect(
      generator.next({ data: locations }).value
    ).toEqual(
      put(setLocations(locations))
    );
  });

  it('should restart', () => {
    expect(
      generator.next().value
    ).toEqual(
      take(SET_ADDRESS)
    );
  });
});

describe('setLocationResponder', () => {
  const generator = setLocationResponder();

  it('should take SET_LOCATION action', () => {
    expect(
      generator.next().value
    ).toEqual(
      take(SET_LOCATION)
    );
  });

  it('should call request forecast', () => {
    const latitude = 0;
    const longitude = 0;
    expect(
      generator.next({ coordinates: { latitude, longitude } }).value
    ).toEqual(
      call(request, `/forecast-api/${latitude}/${longitude}`)
    );
  });

  it('should dispatch setForecasts', () => {
    const forecasts = [{ time: '' }];
    expect(
      generator.next({ data: { hourly: { data: forecasts } } }).value
    ).toEqual(
      put(setForecasts(forecasts))
    );
  });

  it('should restart', () => {
    expect(
      generator.next().value
    ).toEqual(
      take(SET_LOCATION)
    );
  });
});
