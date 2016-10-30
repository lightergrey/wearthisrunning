/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectAddress = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('address')
);

const selectLocations = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('locations')
);

const selectCoordinates = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('coordinates')
);

const selectForecasts = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('forecasts')
);

const selectForecast = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('forecast')
);

export {
  selectHome,
  selectAddress,
  selectLocations,
  selectCoordinates,
  selectForecasts,
  selectForecast,
};
