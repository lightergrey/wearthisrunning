import React from 'react';
import './styles.css';

function AddressInput({address, onChange}) {
  return (
    <input
      className="AddressInput"
      placeholder={'address'}
      value={address}
      onChange={evt => onChange(evt.target.value)}
    />
  );
}

export default AddressInput;
