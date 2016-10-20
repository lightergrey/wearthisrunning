/**
*
* Conditions
*
*/

import React from 'react';


import styles from './styles.css';

function Conditions({ conditions }) {
  let content;

  if (conditions) {
    content = (
      <ul className={styles.list}>
        {conditions.map((item, itemIndex) => (
          <li className={styles.item} key={itemIndex}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className={styles.container}>
      {content}
    </div>
  );
}

Conditions.propTypes = {
  conditions: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]).isRequired,
};

export default Conditions;
