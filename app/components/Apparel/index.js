/**
*
* Apparel
*
*/

import React from 'react';


import styles from './styles.css';

function Apparel({ apparel }) {
  return (
    <div className={styles.container}>
      <ul className={styles.apparel}>
        {apparel.map((item, itemIndex) => (
          <li key={itemIndex}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

Apparel.propTypes = {
  apparel: React.PropTypes.array.isRequired,
};

export default Apparel;
