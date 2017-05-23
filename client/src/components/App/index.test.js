import React from 'react';
import {shallow} from 'enzyme';
import App from './';

it('renders without crashing', () => {
  const renderedComponent = shallow(<App />);
  expect(renderedComponent).toBeDefined();
});

it('sets inital state correctly', () => {
  const renderedComponent = shallow(<App />);
  const expectedState = {
    address: '',
    forecast: {},
    forecasts: [],
    location: {},
    locations: [],
  };
  expect(renderedComponent.state()).toEqual(expectedState);
});
