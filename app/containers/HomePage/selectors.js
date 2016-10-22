/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectTimes = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('times')
);

const selectAddress = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('address')
);

const selectApparel = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('apparel')
);

const selectConditions = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('conditions')
);

const selectFeel = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('feel')
);

export {
  selectHome,
  selectTimes,
  selectAddress,
  selectApparel,
  selectConditions,
  selectFeel,
};
