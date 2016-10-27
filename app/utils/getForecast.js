import request from './request';

export default function getForecast(latitude, longitude) {
  return request(`/forecast-api/${latitude}/${longitude}`)
    .then((response) => {
      if (response.data.err) {
        throw response.data.err;
      }
      const hourlyForecasts = response.data.hourly.data;
      return { hourlyForecasts };
    });
}
