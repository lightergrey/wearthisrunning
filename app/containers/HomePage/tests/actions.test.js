import expect from 'expect';

import {
  SET_ADDRESS,
  SET_HOURLY_FORECASTS,
  SET_FORECAST,
} from '../constants';

import {
  setAddress,
  setHourlyForecasts,
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

  describe('setHourlyForecasts', () => {
    it('should return the correct type', () => {
      const hourlyForecasts = [];
      const expectedResult = {
        type: SET_HOURLY_FORECASTS,
        hourlyForecasts,
      };

      expect(setHourlyForecasts(hourlyForecasts)).toEqual(expectedResult);
    });
  });

  describe('setForecast', () => {
    it('should return the correct type', () => {
      const forecast = {};
      const expectedResult = {
        type: SET_FORECAST,
        forecast,
      };

      expect(setForecast(forecast)).toEqual(expectedResult);
    });
  });
});
