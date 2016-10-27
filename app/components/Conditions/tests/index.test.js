import Conditions from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Conditions />', () => {
  it('Should render a list of item strings', () => {
    const conditions = ['foo', 'bar', 'baz'];
    const renderedComponent = shallow(
      <Conditions conditions={conditions} />
    );
    expect(renderedComponent.find('li').length).toEqual(3);
  });
});
