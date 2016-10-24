import request from './request';

export default function getForecast(latitude, longitude) {
  return request(`/forecast-api/${latitude}/${longitude}`)
    .then((response) => {
      if (response.data.err) {
        throw response.data.err;
      }
      const forecast = response.data;
      return { forecast };
    });
}
