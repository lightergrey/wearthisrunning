/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styles from './styles.css';

import {
  selectAddress,
  selectHourlyForecasts,
  selectForecast,
} from './selectors';

import {
  setAddress,
  setForecast,
} from './actions';

import Address from 'components/Address';
import HourlyForecasts from 'components/HourlyForecasts';
import Apparel from 'components/Apparel';
import Conditions from 'components/Conditions';

import getFeel from '../../utils/getFeel';
import getApparel from '../../utils/getApparel';
import getConditions from '../../utils/getConditions';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    let hourlyForecastSelector = null;
    let feel = null;
    let apparel = null;
    let conditions = null;

    if (this.props.hourlyForecasts !== false) {
      hourlyForecastSelector = (
        <HourlyForecasts
          hourlyForecasts={this.props.hourlyForecasts} onChangeHourlyForecasts={this.props.onChangeHourlyForecasts}
        />
      );
    }

    if (this.props.forecast !== false) {
      feel = (
        getFeel(this.props.forecast)
      );

      apparel = (
        <Apparel apparel={getApparel(this.props.forecast)} />
      );

      conditions = (
        <Conditions conditions={getConditions(this.props.forecast)} />
      );
    }

    return (
      <div className={`${styles.container} ${styles[feel] || styles.default}`}>
        <div className={styles.content}>
          <Address address={this.props.address} onChangeAddress={this.props.onChangeAddress} />
          {hourlyForecastSelector}
          {apparel}
          {conditions}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  address: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
  hourlyForecasts: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  forecast: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  onChangeAddress: React.PropTypes.func,
  onChangeHourlyForecasts: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeAddress: (address) => dispatch(setAddress(address)),
    onChangeHourlyForecasts: (forecast) => dispatch(setForecast(forecast)),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  address: selectAddress(),
  hourlyForecasts: selectHourlyForecasts(),
  forecast: selectForecast(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
