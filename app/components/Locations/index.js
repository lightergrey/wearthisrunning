/**
*
* Locations
*
*/

import React from 'react';

import styles from './styles.css';

function Locations({ locations, onChangeLocation }) {
  return (
    <div className={styles.container}>
      <span>Select Location:</span>
      <ul className={styles.locations}>
        {locations.map((location, locationIndex) =>
          <li key={locationIndex}>
            <button className={styles.button} onClick={() => onChangeLocation(location)}>
              {location.formattedAddress}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

Locations.propTypes = {
  locations: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onChangeLocation: React.PropTypes.func.isRequired,
};

export default Locations;
