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
// import Forecasts from 'components/Forecasts';
// import Apparel from 'components/Apparel';
// import Conditions from 'components/Conditions';

// describe('<HomePage />', () => {
//   it('should render the forecasts if loading was successful', () => {
//     const forecasts = [
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
//         forecasts={forecasts}
//         forecast={false}
//         onChangeForecasts={() => {}}
//         onChangeAddress={() => {}}
//       />
//     );
//
//     expect(renderedComponent.contains(
//       <Forecasts
//         forecasts={forecasts}
//         onChangeForecasts={() => {}}
//       />
//     )).toEqual(true);
//   });
//
//   it('should render the apparel if forecast is set', () => {
//     const forecast = {
//       time: 0,
//       apparentTemperature: 0,
//     };
//     const forecasts = [
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
//         forecasts={forecasts}
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

  describe('onChangeForecasts', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeForecasts).toExist();
    });

    it('should dispatch setForecast when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      const forecast = {};
      result.onChangeForecasts(forecast);
      expect(dispatch).toHaveBeenCalledWith(setForecast(forecast));
    });
  });
});
