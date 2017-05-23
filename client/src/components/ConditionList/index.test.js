import React from 'react';
import ConditionList from './';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const renderedComponent = shallow(<ConditionList />);
  expect(renderedComponent).toBeDefined();
});

it('renders a list of conditions', () => {
  const conditions = ['foo', 'bar', 'baz'];
  const renderedComponent = shallow(<ConditionList conditions={conditions} />);
  expect(renderedComponent.find('li')).toHaveLength(3);
});
