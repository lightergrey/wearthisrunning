import React from 'react';
import './styles.css';
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';
import isTomorrow from 'date-fns/is_tomorrow';

function ForecastSelect({forecasts, onChange}) {
  function formatTime(time) {
    const date = new Date(1000 * time);
    const formatedTime = format(date, 'h:mm A');
    if (isToday(date)) {
      return `Today ${formatedTime}`;
    }
    if (isTomorrow(date)) {
      return `Tomorrow ${formatedTime}`;
    }
    return `${format(date, 'dddd')} ${formatedTime}`;
  }

  let options;
  let select;
  if (forecasts && forecasts.length > 0) {
    options = forecasts.map(forecast => (
      <option value={forecast.time} key={forecast.time}>
        {formatTime(forecast.time)}
      </option>
    ));
    select = (
      <select
        className="select"
        onChange={evt => onChange(parseInt(evt.target.value, 10))}
      >
        {options}
      </select>
    );
  }

  return <div className="ForecastSelect">{select}</div>;
}

export default ForecastSelect;
