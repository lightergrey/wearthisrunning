/**
*
* Address
*
*/

import React from 'react';


import styles from './styles.css';

function Address({ address, onChangeAddress }) {
  function onChange(evt) {
    onChangeAddress(evt.target.value);
  }

  return (
    <div className={styles.address}>
      <input onChange={onChange} value={address} />
    </div>
  );
}

Address.propTypes = {
  address: React.PropTypes.string,
  onChangeAddress: React.PropTypes.func.isRequired,
};

export default Address;
