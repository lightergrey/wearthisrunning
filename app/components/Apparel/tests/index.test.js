import Apparel from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { fromJS } from 'immutable';

describe('<Apparel />', () => {
  it('Should render a list of item strings', () => {
    const apparel = fromJS(['foo', 'bar', 'baz']);
    const renderedComponent = shallow(
      <Apparel apparel={apparel} />
    );
    expect(renderedComponent.find('li').length).toEqual(3);
  });
});
