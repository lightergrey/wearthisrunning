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

import {
  SET_ADDRESS,
} from '../constants';

import {
  setHourlyForecasts,
} from '../actions';

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

  it('should call getGeocode', () => {
    const address = '';
    expect(
      generator.next({ address }).value
    ).toEqual(
      call(getGeocode, address)
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

  it('should dispatch setHourlyForecasts', () => {
    const hourlyForecasts = [{ time: '' }];
    expect(
      generator.next({ hourlyForecasts }).value
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
