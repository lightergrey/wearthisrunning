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
  selectTimes,
  selectAddress,
  selectApparel,
  selectConditions,
  selectFeel,
} from './selectors';

import Address from 'components/Address';
import Apparel from 'components/Apparel';
import Conditions from 'components/Conditions';
import Time from 'components/Time';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={`${styles.container} ${styles[this.props.feel] || styles.default}`}>
        <div className={styles.content}>
          <Address address={this.props.address} onChangeAddress={this.props.onClickSettingsButton} />
          <Time times={this.props.times} onChangeTime={this.props.onClickSettingsButton} />
          <Apparel apparel={this.props.apparel} />
          <Conditions conditions={this.props.conditions} />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  times: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]).isRequired,
  address: React.PropTypes.string,
  apparel: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]).isRequired,
  conditions: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]).isRequired,
  feel: React.PropTypes.string,
  onClickSettingsButton: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onClickSettingsButton: () => console.log('onClickSettingsButton'),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  times: selectTimes(),
  address: selectAddress(),
  apparel: selectApparel(),
  conditions: selectConditions(),
  feel: selectFeel(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
