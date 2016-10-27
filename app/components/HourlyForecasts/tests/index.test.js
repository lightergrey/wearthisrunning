import HourlyForecasts from '../index';

import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('<HourlyForecasts />', () => {
  it('Should render select options for provided hourlyForecasts', () => {
    const hourlyForecasts = [{ time: '0' }, { time: '1' }, { time: '2' }];
    const renderedComponent = shallow(
      <HourlyForecasts hourlyForecasts={hourlyForecasts} onChangeHourlyForecasts={() => {}} />
    );
    expect(renderedComponent.find('option').length).toEqual(3);
  });

  it('Should handle a change event', () => {
    const onClickSpy = expect.createSpy();
    const hourlyForecasts = [{ time: '0' }, { time: '1' }, { time: '2' }];
    const renderedComponent = mount(
      <HourlyForecasts hourlyForecasts={hourlyForecasts} onChangeHourlyForecasts={onClickSpy} />
    );
    renderedComponent.find('select').simulate('change');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
