import Conditions from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { fromJS } from 'immutable';

describe('<Conditions />', () => {
  it('Should render a list of item strings', () => {
    const conditions = fromJS(['foo', 'bar', 'baz']);
    const renderedComponent = shallow(
      <Conditions conditions={conditions} />
    );
    expect(renderedComponent.find('li').length).toEqual(3);
  });
});
