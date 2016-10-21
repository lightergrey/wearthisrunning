import Times from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Times />', () => {
  it('Should render select options for provided times', () => {
    const times = ['1', '2', '3'];
    const renderedComponent = shallow(
      <Times times={times} />
    );
    expect(renderedComponent.find('option').length).toEqual(3);
  });
});
