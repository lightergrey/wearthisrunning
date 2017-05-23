import React from 'react';
import AddressInput from './';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const renderedComponent = shallow(<AddressInput />);
  expect(renderedComponent).toBeDefined();
});

it('shows an input with placeholder', () => {
  const renderedComponent = shallow(<AddressInput />);
  expect(renderedComponent.find('input')).toHaveLength(1);
  expect(renderedComponent.find('input').props().placeholder).toEqual(
    'address'
  );
});

it('displays an address', () => {
  const address = 'Brooklyn';
  const renderedComponent = shallow(<AddressInput address={address} />);
  expect(renderedComponent.find('input').props().value).toEqual(address);
});

it('handles change events', () => {
  const myMock = jest.fn();
  const address = 'Brooklyn';
  const renderedComponent = shallow(
    <AddressInput address={address} onChange={myMock} />
  );
  renderedComponent
    .find('input')
    .simulate('change', {target: {value: 'Starkville'}});
  expect(myMock).toBeCalled();
  expect(myMock).lastCalledWith('Starkville');
});
