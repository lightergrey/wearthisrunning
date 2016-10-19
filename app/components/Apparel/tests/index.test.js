import Apparel from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Apparel />', () => {
  it('Should render a list of item strings', () => {
    const renderedComponent = shallow(
      <Apparel items={['foo', 'bar', 'baz']} />
    );
    expect(renderedComponent.find('li').length).toEqual(3);
  });
});
