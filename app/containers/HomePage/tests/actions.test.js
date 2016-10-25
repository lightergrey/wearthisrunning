import expect from 'expect';

import {
  SET_ADDRESS,
  SET_LATITUDE_LONGITUDE,
  SET_FORECAST,
  SET_CURRENT_CONDITIONS,
  SET_CONDITIONS,
  SET_RECOMMENDATIONS,
} from '../constants';

import {
  setAddress,
  setLatitudeLongitude,
  setForecast,
  setCurrentConditions,
  setConditions,
  setRecommendations,
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

  describe('setCurrentConditions', () => {
    it('should return the correct type', () => {
      const currentConditions = '';
      const expectedResult = {
        type: SET_CURRENT_CONDITIONS,
        currentConditions,
      };

      expect(setCurrentConditions(currentConditions)).toEqual(expectedResult);
    });
  });

  describe('setConditions', () => {
    it('should return the correct type', () => {
      const conditions = [];
      const expectedResult = {
        type: SET_CONDITIONS,
        conditions,
      };

      expect(setConditions(conditions)).toEqual(expectedResult);
    });
  });

  describe('setRecommendations', () => {
    it('should return the correct type', () => {
      const recommendations = [];
      const expectedResult = {
        type: SET_RECOMMENDATIONS,
        recommendations,
      };

      expect(setRecommendations(recommendations)).toEqual(expectedResult);
    });
  });
});
