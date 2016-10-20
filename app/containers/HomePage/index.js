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

import styles from './styles.css';

import Apparel from 'components/Apparel';
import Conditions from 'components/Conditions';
import SettingsSummary from 'components/SettingsSummary';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const feel = '';
    return (
      <div className={`${styles.container} ${styles[feel] || styles.default}`}>
        <div className={styles.content}>
          <SettingsSummary address={'Brookyn, NY'} date={'9:00 am Today'} onClickButton={() => { console.log('clicked'); }} />
          <Apparel items={['Long-Sleeve Shirt', 'Gloves', 'Tights']} />
          <Conditions items={['32° F', 'Mostly Cloudy', 'Windy']} />
        </div>
      </div>
    );
  }
}
