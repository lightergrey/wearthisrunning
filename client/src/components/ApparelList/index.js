import React from 'react';
import './styles.css';

function ApparelList({apparel}) {
  var apparelList;
  if (apparel) {
    apparelList = apparel.map((item, itemIndex) => (
      <li key={itemIndex}>{item}</li>
    ));
  }

  return (
    <ul className="ApparelList">
      {apparelList}
    </ul>
  );
}

export default ApparelList;
