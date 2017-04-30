import React from 'react';
import './styles.css';

function ConditionList({conditions}) {
  var conditionsList;
  if (conditions) {
    conditionsList = conditions.map((item, itemIndex) => (
      <li className="item" key={itemIndex}>{item}</li>
    ));
  }

  return (
    <ul className="ConditionList">
      {conditionsList}
    </ul>
  );
}

export default ConditionList;
