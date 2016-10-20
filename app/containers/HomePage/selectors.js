/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectDate = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('date')
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
  selectDate,
  selectAddress,
  selectApparel,
  selectConditions,
  selectFeel,
};
