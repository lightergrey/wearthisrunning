import expect from 'expect';
import homeReducer from '../reducer';
import { fromJS } from 'immutable';

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
});
