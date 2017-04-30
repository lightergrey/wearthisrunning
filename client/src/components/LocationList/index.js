import React from 'react';
import './styles.css';

function LocationList({locations, onClick}) {
  var locationList;
  let locationListItems;
  if (locations && locations.length > 0) {
    locationListItems = locations.map((location, locationIndex) => (
      <li key={locationIndex}>
        <button className="button" onClick={() => onClick(location)}>
          {location.formatted_address}
        </button>
      </li>
    ));
    locationList = <ul className={'list'}>{locationListItems}</ul>;
  }

  return (
    <div className="LocationList">
      {locationList}
    </div>
  );
}

export default LocationList;
