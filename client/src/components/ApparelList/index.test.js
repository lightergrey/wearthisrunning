import React from 'react';
import ApparelList from './';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const renderedComponent = shallow(<ApparelList />);
  expect(renderedComponent).toBeDefined();
});

it('renders a list of apparel', () => {
  const apparel = ['foo', 'bar', 'baz'];
  const renderedComponent = shallow(<ApparelList apparel={apparel} />);
  expect(renderedComponent.find('li')).toHaveLength(3);
});
