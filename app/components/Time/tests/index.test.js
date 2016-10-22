import Time from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { fromJS } from 'immutable';

describe('<Time />', () => {
  it('Should render select options for provided times', () => {
    const times = fromJS(['1', '2', '3']);
    const renderedComponent = shallow(
      <Time times={times} onChangeTime={() => {}} />
    );
    expect(renderedComponent.find('option').length).toEqual(3);
  });

  it('Should handle a change event', () => {
    const onClickSpy = expect.createSpy();
    const times = fromJS(['1', '2', '3']);
    const renderedComponent = shallow(
      <Time times={times} onChangeTime={onClickSpy} />
    );
    renderedComponent.find('select').simulate('change');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
