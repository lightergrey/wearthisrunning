import React from 'react';
import LocationList from './';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const renderedComponent = shallow(<LocationList />);
  expect(renderedComponent).toBeDefined();
});

it('renders a button for location and handles click', () => {
  const myMock = jest.fn();
  const formattedAddress = 'Brookyn, NY';
  const locations = [{formatted_address: formattedAddress}];
  const renderedComponent = shallow(
    <LocationList locations={locations} onClick={myMock} />
  );
  expect(renderedComponent.find('button').text()).toEqual(formattedAddress);
  renderedComponent.find('button').simulate('click');
  expect(myMock).toBeCalled();
  expect(myMock).lastCalledWith({formatted_address: 'Brookyn, NY'});
});

it('renders buttons for each address', () => {
  const locations = [
    {formatted_address: '0'},
    {formatted_address: '1'},
    {formatted_address: '2'},
  ];
  const renderedComponent = shallow(<LocationList locations={locations} />);
  expect(renderedComponent.find('button')).toHaveLength(3);
});
