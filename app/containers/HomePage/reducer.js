/*
 * HomeReducer
 */

import { fromJS } from 'immutable';
import {
  SET_ADDRESS,
} from './constants';

const initialState = fromJS({
  times: false,
  address: '',
  apparel: false,
  conditions: false,
  feel: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ADDRESS:
      return state
        .set('address', action.address);
    default:
      return state;
  }
}

export default homeReducer;
