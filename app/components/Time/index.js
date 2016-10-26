/**
*
* Time
*
*/

import React from 'react';
import moment from 'moment';

import styles from './styles.css';

function Time({ times, onChangeTime }) {
  let content;
  if (times) {
    content = (
      <select id="day" onChange={onChangeTime}>
        {times.map((time) =>
          <option value={time} key={time}>{moment(time, 'X').calendar()}</option>
        )}
      </select>
    );
  }
  return (
    <div className={styles.time}>
      {content}
    </div>
  );
}

Time.propTypes = {
  times: React.PropTypes.array.isRequired,
  onChangeTime: React.PropTypes.func.isRequired,
};

export default Time;
