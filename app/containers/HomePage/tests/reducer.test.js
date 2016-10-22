import expect from 'expect';
import homeReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  setAddress,
} from '../actions';

describe('homeReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      times: false,
      address: '',
      apparel: false,
      conditions: false,
      feel: '',
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
});
