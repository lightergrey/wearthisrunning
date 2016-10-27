import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectHome,
  selectAddress,
  selectHourlyForecasts,
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

describe('selectHourlyForecasts', () => {
  const hourlyForecastsSelector = selectHourlyForecasts();
  it('should select time', () => {
    const hourlyForecasts = false;
    const mockedState = fromJS({
      home: {
        hourlyForecasts,
      },
    });
    expect(hourlyForecastsSelector(mockedState)).toEqual(hourlyForecasts);
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
