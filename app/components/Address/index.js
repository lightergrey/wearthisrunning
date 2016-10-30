/**
*
* Address
*
*/

import React from 'react';


import styles from './styles.css';

function Address({ address, onChangeAddress, locations, onChangeLocation }) {
  let suggestions;

  if (locations) {
    suggestions = (
      <div className={styles.suggestions}>
        <strong>Select Location:</strong>
        <ul className={styles.list}>
          {locations.map((suggestion, suggestionIndex) =>
            <li key={suggestionIndex}>
              <button className={styles.button} onClick={() => onChangeLocation(suggestion)}>
                {suggestion.formattedAddress}
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  }

  function onChange(evt) {
    onChangeAddress(evt.target.value);
  }

  return (
    <div className={styles.container}>
      <input className={styles.address} onChange={onChange} value={address} placeholder={'address'} />
      {suggestions}
    </div>
  );
}

Address.propTypes = {
  address: React.PropTypes.string.isRequired,
  locations: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onChangeAddress: React.PropTypes.func.isRequired,
  onChangeLocation: React.PropTypes.func.isRequired,
};

export default Address;
