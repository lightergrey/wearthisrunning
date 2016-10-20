/**
*
* Apparel
*
*/

import React from 'react';


import styles from './styles.css';

function Apparel({ apparel }) {
  let content;

  if (apparel) {
    content = (
      <ul className={styles.list}>
        {apparel.map((item, itemIndex) => (
          <li key={itemIndex}>{item}</li>
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

Apparel.propTypes = {
  apparel: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]).isRequired,
};

export default Apparel;
