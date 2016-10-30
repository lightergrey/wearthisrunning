import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectHome,
  selectAddress,
  selectLocations,
  selectCoordinates,
  selectForecasts,
  selectForecast,
} from '../selectors';

describe('selectHome', () => {
  const homeSelector = selectHome();
  it('should select the home state', () => {
    const homeState = fromJS({});
    const mockedState = fromJS({
      home: homeState,
    });
    expect(homeSelector(mockedState)).toEqual(homeState);
  });
});

describe('selectAddress', () => {
  const addressSelector = selectAddress();
  it('should select address', () => {
    const address = false;
    const mockedState = fromJS({
      home: {
        address,
      },
    });
    expect(addressSelector(mockedState)).toEqual(address);
  });
});

describe('selectLocations', () => {
  const locationsSelector = selectLocations();
  it('should select locations', () => {
    const locations = false;
    const mockedState = fromJS({
      home: {
        locations,
      },
    });
    expect(locationsSelector(mockedState)).toEqual(locations);
  });
});

describe('selectCoordinates', () => {
  const coordinatesSelector = selectCoordinates();
  it('should select coordinates', () => {
    const coordinates = false;
    const mockedState = fromJS({
      home: {
        coordinates,
      },
    });
    expect(coordinatesSelector(mockedState)).toEqual(coordinates);
  });
});

describe('selectForecasts', () => {
  const forecastsSelector = selectForecasts();
  it('should select time', () => {
    const forecasts = false;
    const mockedState = fromJS({
      home: {
        forecasts,
      },
    });
    expect(forecastsSelector(mockedState)).toEqual(forecasts);
  });
});

describe('selectForecast', () => {
  const forecastSelector = selectForecast();
  it('should select time', () => {
    const forecast = false;
    const mockedState = fromJS({
      home: {
        forecast,
      },
    });
    expect(forecastSelector(mockedState)).toEqual(forecast);
  });
});
