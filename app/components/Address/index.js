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
    <div className={styles.container}>
      <input className={styles.address} onChange={onChange} value={address} placeholder={'address'} />
    </div>
  );
}

Address.propTypes = {
  address: React.PropTypes.string.isRequired,
  onChangeAddress: React.PropTypes.func.isRequired,
};

export default Address;
