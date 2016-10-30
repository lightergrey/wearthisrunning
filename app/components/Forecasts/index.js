/**
*
* Forecasts
*
*/

import React from 'react';
import moment from 'moment';

import styles from './styles.css';

function Forecasts({ forecasts, onChangeForecasts }) {
  const onChange = (evt) => {
    const forecast = JSON.parse(evt.target.value);
    onChangeForecasts(forecast);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <select className={styles.select} onChange={onChange}>
          {forecasts.map((forecast) =>
            <option value={JSON.stringify(forecast)} key={forecast.time}>{moment(forecast.time, 'X').calendar()}</option>
          )}
        </select>
      </div>
    </div>
  );
}

Forecasts.propTypes = {
  forecasts: React.PropTypes.array.isRequired,
  onChangeForecasts: React.PropTypes.func.isRequired,
};

export default Forecasts;
