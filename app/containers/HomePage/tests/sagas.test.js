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
} from '../constants';

import {
  setHourlyForecasts,
} from '../actions';

import request from '../../../utils/request';

import {
  setAddressResponder,
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

  it('should call request forecast', () => {
    const latitude = 0;
    const longitude = 0;
    expect(
      generator.next({ data: [{ latitude, longitude }] }).value
    ).toEqual(
      call(request, `/forecast-api/${latitude}/${longitude}`)
    );
  });

  it('should dispatch setHourlyForecasts', () => {
    const hourlyForecasts = [{ time: '' }];
    expect(
      generator.next({ data: { hourly: { data: hourlyForecasts } } }).value
    ).toEqual(
      put(setHourlyForecasts(hourlyForecasts))
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
