/*
 * HomeReducer
 */

import { fromJS } from 'immutable';

const initialState = fromJS({
  date: '',
  address: '',
  apparel: false,
  conditions: false,
  feel: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default homeReducer;
