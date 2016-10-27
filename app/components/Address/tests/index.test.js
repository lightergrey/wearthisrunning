import Address from '../index';

import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('<Address />', () => {
  it('Should display an address', () => {
    const address = 'Brookyn, NY';
    const renderedComponent = shallow(
      <Address address={address} onChangeAddress={() => {}} />
    );
    expect(renderedComponent.find('input').props().value).toEqual(address);
  });

  it('Should handle a change event', () => {
    const onClickSpy = expect.createSpy();
    const renderedComponent = mount(
      <Address address={''} onChangeAddress={onClickSpy} />
    );
    renderedComponent.find('input').simulate('change');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
