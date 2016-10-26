/**
*
* Conditions
*
*/

import React from 'react';


import styles from './styles.css';

function Conditions({ conditions }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {conditions.map((item, itemIndex) => (
          <li className={styles.item} key={itemIndex}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

Conditions.propTypes = {
  conditions: React.PropTypes.array.isRequired,
};

export default Conditions;
