import Locations from '../index';

import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('<Locations />', () => {
  it('Should display an button with a formattedAddress', () => {
    const formattedAddress = 'Brookyn, NY';
    const locations = [{ formattedAddress }];
    const renderedComponent = shallow(
      <Locations
        locations={locations}
        onChangeLocation={() => {}}
      />
    );
    expect(renderedComponent.find('button').text()).toEqual(formattedAddress);
  });

  it('Should display an item for each location', () => {
    const formattedAddress = 'Brookyn, NY';
    const locations = [{ formattedAddress }];
    const renderedComponent = shallow(
      <Locations
        locations={locations}
        onChangeLocation={() => {}}
      />
    );
    expect(renderedComponent.find('li').length).toEqual(1);
  });

  it('Should handle a change event', () => {
    const onClickSpy = expect.createSpy();
    const formattedAddress = 'Brookyn, NY';
    const locations = [{ formattedAddress }];
    const renderedComponent = mount(
      <Locations
        locations={locations}
        onChangeLocation={onClickSpy}
      />
    );
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
