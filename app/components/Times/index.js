/**
*
* Times
*
*/

import React from 'react';
import moment from 'moment';

import styles from './styles.css';

function Times({ times }) {
  return (
    <div className={styles.Times}>
      <select id="day">
        {times.map((time) =>
          <option value={time} key={time}>{moment(time, 'X').calendar()}</option>
        )}
      </select>
    </div>
  );
}

Times.propTypes = {
  times: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default Times;
