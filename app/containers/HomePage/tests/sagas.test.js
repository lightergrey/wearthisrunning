/**
 * Test the Home sagas
 */

import expect from 'expect';
import {
  call,
  put,
  take,
} from 'redux-saga/effects';

import geocode from '../../../utils/geocode';

import {
  SET_ADDRESS,
} from '../constants';

import {
  setLatitudeLongitude,
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

  it('should call geocode', () => {
    const address = '';
    expect(
      generator.next({ address }).value
    ).toEqual(
      call(geocode, address)
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
});
