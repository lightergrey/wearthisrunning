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
import Helmet from 'react-helmet';

import styles from './styles.css';

import {
  selectAddress,
  selectLocations,
  selectForecasts,
  selectForecast,
} from './selectors';

import {
  setAddress,
  setLocation,
  setForecast,
} from './actions';

import Address from 'components/Address';
import Forecasts from 'components/Forecasts';
import Apparel from 'components/Apparel';
import Conditions from 'components/Conditions';

import getFeel from '../../utils/getFeel';
import getApparel from '../../utils/getApparel';
import { getConditions } from '../../utils/getConditions';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    let forecastSelector = null;
    let feel = null;
    let apparel = null;
    let conditions = null;

    if (this.props.forecasts !== false) {
      forecastSelector = (
        <Forecasts
          forecasts={this.props.forecasts} onChangeForecasts={this.props.onChangeForecasts}
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
        <Helmet
          title="Wear This Running"
          meta={[
            { name: 'description', content: 'Recommendations for what to wear when and where you run.' },
          ]}
        />
        <div className={styles.content}>
          <Address
            address={this.props.address}
            locations={this.props.locations}
            onChangeAddress={this.props.onChangeAddress}
            onChangeLocation={this.props.onChangeLocation}
          />
          {forecastSelector}
          {conditions}
          {apparel}
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
  locations: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  forecasts: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  forecast: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  onChangeAddress: React.PropTypes.func,
  onChangeLocation: React.PropTypes.func,
  onChangeForecasts: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeAddress: (address) => dispatch(setAddress(address)),
    onChangeLocation: (location) => dispatch(setLocation(location)),
    onChangeForecasts: (forecast) => dispatch(setForecast(forecast)),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  address: selectAddress(),
  locations: selectLocations(),
  forecasts: selectForecasts(),
  forecast: selectForecast(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
