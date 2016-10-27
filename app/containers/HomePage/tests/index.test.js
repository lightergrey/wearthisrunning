/**
 * Test the HomePage
 */

import expect from 'expect';
// import { shallow, mount } from 'enzyme';
// import React from 'react';

import {
  // HomePage,
  mapDispatchToProps,
} from '../index';

import {
  setAddress,
  setForecast,
} from '../actions';

// import Address from 'components/Address';
// import HourlyForecasts from 'components/HourlyForecasts';
// import Apparel from 'components/Apparel';
// import Conditions from 'components/Conditions';

// describe('<HomePage />', () => {
//   it('should render the hourlyForecasts if loading was successful', () => {
//     const hourlyForecasts = [
//       {
//         time: 0,
//         apparentTemperature: 0,
//       },
//       {
//         time: 1,
//         apparentTemperature: 0,
//       },
//     ];
//     const renderedComponent = mount(
//       <HomePage
//         address={''}
//         hourlyForecasts={hourlyForecasts}
//         forecast={false}
//         onChangeHourlyForecasts={() => {}}
//         onChangeAddress={() => {}}
//       />
//     );
//
//     expect(renderedComponent.contains(
//       <HourlyForecasts
//         hourlyForecasts={hourlyForecasts}
//         onChangeHourlyForecasts={() => {}}
//       />
//     )).toEqual(true);
//   });
//
//   it('should render the apparel if forecast is set', () => {
//     const forecast = {
//       time: 0,
//       apparentTemperature: 0,
//     };
//     const hourlyForecasts = [
//       {
//         time: 0,
//         apparentTemperature: 0,
//       },
//       {
//         time: 1,
//         apparentTemperature: 0,
//       },
//     ];
//     const renderedComponent = mount(
//       <HomePage
//         address={''}
//         onChangeAddress={() => {}}
//         hourlyForecasts={hourlyForecasts}
//         forecast={forecast}
//       />
//     );
//
//     expect(renderedComponent.contains(<Apparel apparel={[]} />)).toEqual(true);
//   });
// });

describe('mapDispatchToProps', () => {
  describe('onChangeAddress', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeAddress).toExist();
    });

    it('should dispatch setAddress when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const address = 'address';
      result.onChangeAddress(address);
      expect(dispatch).toHaveBeenCalledWith(setAddress(address));
    });
  });

  describe('onChangeHourlyForecasts', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeHourlyForecasts).toExist();
    });

    it('should dispatch setForecast when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const forecast = {};
      result.onChangeHourlyForecasts(forecast);
      expect(dispatch).toHaveBeenCalledWith(setForecast(forecast));
    });
  });
});
