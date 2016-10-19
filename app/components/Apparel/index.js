/**
*
* Apparel
*
*/

import React from 'react';


import styles from './styles.css';

function Apparel({ items }) {
  let content;

  if (items) {
    content = (
      <ul className={styles.list}>
        {items.map((item, itemIndex) => (
          <li key={itemIndex}>{item}</li>
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

Apparel.propTypes = {
  items: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]).isRequired,
};

export default Apparel;
