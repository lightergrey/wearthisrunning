/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectAddress = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('address')
);

const selectHourlyForecasts = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('hourlyForecasts')
);

const selectForecast = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('forecast')
);

export {
  selectHome,
  selectAddress,
  selectHourlyForecasts,
  selectForecast,
};
