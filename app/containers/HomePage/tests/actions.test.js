import expect from 'expect';

import {
  SET_ADDRESS,
  SET_LATITUDE_LONGITUDE,
  SET_FORECAST,
} from '../constants';

import {
  setAddress,
  setLatitudeLongitude,
  setForecast,
} from '../actions';

describe('Home Actions', () => {
  describe('setAddress', () => {
    it('should return the correct type', () => {
      const address = 'address';
      const expectedResult = {
        type: SET_ADDRESS,
        address,
      };

      expect(setAddress(address)).toEqual(expectedResult);
    });
  });

  describe('setLatitudeLongitude', () => {
    it('should return the correct type', () => {
      const latitude = 0;
      const longitude = 0;
      const expectedResult = {
        type: SET_LATITUDE_LONGITUDE,
        latitude,
        longitude,
      };

      expect(setLatitudeLongitude(latitude, longitude)).toEqual(expectedResult);
    });
  });

  describe('setForecast', () => {
    it('should return the correct type', () => {
      const forecast = '';
      const expectedResult = {
        type: SET_FORECAST,
        forecast,
      };

      expect(setForecast(forecast)).toEqual(expectedResult);
    });
  });
});
