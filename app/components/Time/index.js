/**
*
* Time
*
*/

import React from 'react';
import moment from 'moment';

import styles from './styles.css';

function Time({ times, onChangeTime }) {
  return (
    <div className={styles.time}>
      <select id="day" onChange={onChangeTime}>
        {times.map((time) =>
          <option value={time} key={time}>{moment(time, 'X').calendar()}</option>
        )}
      </select>
    </div>
  );
}

Time.propTypes = {
  times: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  onChangeTime: React.PropTypes.func.isRequired,
};

export default Time;
