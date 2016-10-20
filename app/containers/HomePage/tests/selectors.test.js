import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectHome,
  selectDate,
  selectAddress,
  selectApparel,
  selectConditions,
  selectFeel,
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

describe('selectDate', () => {
  const isShowingDateSelector = selectDate();
  it('should select date', () => {
    const date = 'date';
    const mockedState = fromJS({
      home: {
        date,
      },
    });
    expect(isShowingDateSelector(mockedState)).toEqual(date);
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

describe('selectApparel', () => {
  const apparelSelector = selectApparel();
  it('should select apparel', () => {
    const apparel = false;
    const mockedState = fromJS({
      home: {
        apparel,
      },
    });
    expect(apparelSelector(mockedState)).toEqual(apparel);
  });
});

describe('selectConditions', () => {
  const conditionsSelector = selectConditions();
  it('should select time', () => {
    const conditions = false;
    const mockedState = fromJS({
      home: {
        conditions,
      },
    });
    expect(conditionsSelector(mockedState)).toEqual(conditions);
  });
});

describe('selectFeel', () => {
  const feelSelector = selectFeel();
  it('should select time', () => {
    const feel = '';
    const mockedState = fromJS({
      home: {
        feel,
      },
    });
    expect(feelSelector(mockedState)).toEqual(feel);
  });
});
