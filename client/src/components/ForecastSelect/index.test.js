import React from 'react';
import ForecastSelect from './';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const renderedComponent = shallow(<ForecastSelect />);
  expect(renderedComponent).toBeDefined();
});

it('renders without a select if no forecasts provided', () => {
  const renderedComponent = shallow(<ForecastSelect />);
  expect(renderedComponent.find('select')).toHaveLength(0);
});

it('renders options for provided forecasts', () => {
  const now = new Date();
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const forecasts = [
    {time: 1399561200},
    {time: now.valueOf() / 1000},
    {time: tomorrow.valueOf() / 1000},
  ];
  const renderedComponent = shallow(<ForecastSelect forecasts={forecasts} />);
  expect(renderedComponent.find('option')).toHaveLength(3);
  expect(renderedComponent.find('option').first().text()).toEqual(
    'Thursday 11:00 AM'
  );
  expect(renderedComponent.find('option').nodes[1].props.children).toContain(
    'Today'
  );
  expect(renderedComponent.find('option').nodes[2].props.children).toContain(
    'Tomorrow'
  );
});

it('handles change events', () => {
  const myMock = jest.fn();
  const forecasts = [{time: 0}, {time: 1}, {time: 2}];
  const renderedComponent = shallow(
    <ForecastSelect forecasts={forecasts} onChange={myMock} />
  );
  renderedComponent.find('select').simulate('change', {target: {value: 2}});
  expect(myMock).toBeCalled();
  expect(myMock).lastCalledWith(2);
});
