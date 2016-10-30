import Forecasts from '../index';

import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('<Forecasts />', () => {
  it('Should render select options for provided forecasts', () => {
    const forecasts = [{ time: '0' }, { time: '1' }, { time: '2' }];
    const renderedComponent = shallow(
      <Forecasts forecasts={forecasts} onChangeForecasts={() => {}} />
    );
    expect(renderedComponent.find('option').length).toEqual(3);
  });

  it('Should handle a change event', () => {
    const onClickSpy = expect.createSpy();
    const forecasts = [{ time: '0' }, { time: '1' }, { time: '2' }];
    const renderedComponent = mount(
      <Forecasts forecasts={forecasts} onChangeForecasts={onClickSpy} />
    );
    renderedComponent.find('select').simulate('change');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
