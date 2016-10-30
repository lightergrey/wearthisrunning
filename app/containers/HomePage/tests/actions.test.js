import expect from 'expect';

import {
  SET_ADDRESS,
  SET_LOCATIONS,
  SET_LOCATION,
  SET_FORECASTS,
  SET_FORECAST,
} from '../constants';

import {
  setAddress,
  setLocations,
  setLocation,
  setForecasts,
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

  describe('setLocations', () => {
    it('should return the correct type', () => {
      const locations = [{ latitude: 0 }];
      const expectedResult = {
        type: SET_LOCATIONS,
        locations,
      };

      expect(setLocations(locations)).toEqual(expectedResult);
    });
  });

  describe('setLocation', () => {
    it('should return the correct type', () => {
      const formattedAddress = 'formattedAddress';
      const latitude = 0;
      const longitude = 0;
      const location = {
        formattedAddress,
        latitude,
        longitude,
      };
      const coordinates = {
        latitude,
        longitude,
      };
      const expectedResult = {
        type: SET_LOCATION,
        formattedAddress,
        coordinates,
      };

      expect(setLocation(location)).toEqual(expectedResult);
    });
  });

  describe('setForecasts', () => {
    it('should return the correct type', () => {
      const forecasts = [];
      const expectedResult = {
        type: SET_FORECASTS,
        forecasts,
      };

      expect(setForecasts(forecasts)).toEqual(expectedResult);
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
