import expect from 'expect';
import homeReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  setAddress,
  setHourlyForecasts,
  setForecast,
} from '../actions';

describe('homeReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      address: '',
      hourlyForecasts: false,
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

  it('should handle setHourlyForecasts action correctly', () => {
    const hourlyForecasts = [{ time: '' }];
    const expectedResult = state
      .set('hourlyForecasts', hourlyForecasts)
      .set('forecast', hourlyForecasts[0]);

    expect(
      homeReducer(state, setHourlyForecasts(hourlyForecasts))
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
