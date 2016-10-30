import expect from 'expect';
import homeReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  setAddress,
  setLocations,
  setLocation,
  setForecasts,
  setForecast,
} from '../actions';

describe('homeReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      address: '',
      locations: false,
      coordinates: false,
      forecasts: false,
      forecast: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;

    expect(
      homeReducer(undefined, {})
    ).toEqual(
      expectedResult
    );
  });

  it('should handle setAddress action correctly', () => {
    const address = 'address';
    const expectedResult = state
      .set('address', address);

    expect(
      homeReducer(state, setAddress(address))
    ).toEqual(
      expectedResult
    );
  });

  it('should handle setLocations action correctly', () => {
    const locations = [{ latitude: 0 }];
    const expectedResult = state
      .set('locations', locations);

    expect(
      homeReducer(state, setLocations(locations))
    ).toEqual(
      expectedResult
    );
  });

  it('should handle setLocation action correctly', () => {
    const formattedAddress = 'formattedAddress';
    const latitude = 0;
    const longitude = 0;
    const expectedResult = state
    .set('address', formattedAddress)
    .set('coordinates', { latitude, longitude })
    .set('locations', false);

    expect(
      homeReducer(state, setLocation({ formattedAddress, latitude, longitude }))
    ).toEqual(
      expectedResult
    );
  });

  it('should handle setForecasts action correctly', () => {
    const forecasts = [{ time: '' }];
    const expectedResult = state
      .set('forecasts', forecasts)
      .set('forecast', forecasts[0]);

    expect(
      homeReducer(state, setForecasts(forecasts))
    ).toEqual(
      expectedResult
    );
  });

  it('should handle setForecast action correctly', () => {
    const forecast = {};
    const expectedResult = state
      .set('forecast', forecast);

    expect(
      homeReducer(state, setForecast(forecast))
    ).toEqual(
      expectedResult
    );
  });
});
