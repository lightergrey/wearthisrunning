/**
*
* Conditions
*
*/

import React from 'react';


import styles from './styles.css';

function Conditions({ items }) {
  let content;

  if (items) {
    content = (
      <ul className={styles.list}>
        {items.map((item, itemIndex) => (
          <li className={styles.item} key={itemIndex}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      {content}
    </div>
  );
}

Conditions.propTypes = {
  items: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]).isRequired,
};

export default Conditions;
