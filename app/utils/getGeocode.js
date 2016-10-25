import request from './request';

export default function getGeocode(address) {
  return request(`/geocode-api/${address}`)
    .then((response) => {
      if (response.data.err) {
        throw response.data.err;
      }
      const result = response.data[0];
      const latitude = result.latitude;
      const longitude = result.longitude;
      return { latitude, longitude };
    });
}
