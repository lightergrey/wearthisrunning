/*
 * Home Actions
 */

import {
  SET_ADDRESS,
} from './constants';

export function setAddress(address) {
  return {
    type: SET_ADDRESS,
    address,
  };
}
