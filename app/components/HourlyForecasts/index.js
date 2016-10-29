/**
*
* HourlyForecasts
*
*/

import React from 'react';
import moment from 'moment';

import styles from './styles.css';

function HourlyForecasts({ hourlyForecasts, onChangeHourlyForecasts }) {
  const onChange = (evt) => {
    const forecast = JSON.parse(evt.target.value);
    onChangeHourlyForecasts(forecast);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <select className={styles.select} onChange={onChange}>
          {hourlyForecasts.map((forecast) =>
            <option value={JSON.stringify(forecast)} key={forecast.time}>{moment(forecast.time, 'X').calendar()}</option>
          )}
        </select>
      </div>
    </div>
  );
}

HourlyForecasts.propTypes = {
  hourlyForecasts: React.PropTypes.array.isRequired,
  onChangeHourlyForecasts: React.PropTypes.func.isRequired,
};

export default HourlyForecasts;
