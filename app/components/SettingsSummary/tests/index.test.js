import SettingsSummary from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<SettingsSummary />', () => {
  it('Should display a date', () => {
    const date = '9:00 am Today';
    const renderedComponent = shallow(
      <SettingsSummary date={date} />
    );
    expect(renderedComponent.contains(date)).toEqual(true);
  });

  it('Should display an address', () => {
    const address = 'Brookyn, NY';
    const renderedComponent = shallow(
      <SettingsSummary address={address} />
    );
    expect(renderedComponent.contains(address)).toEqual(true);
  });

  it('Should render a button', () => {
    const renderedComponent = shallow(
      <SettingsSummary />
    );
    expect(renderedComponent.find('button').length).toEqual(1);
  });

  it('Should handle a click on the button', () => {
    const onClickSpy = expect.createSpy();
    const renderedComponent = shallow(
      <SettingsSummary onClickButton={onClickSpy} />
    );
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
