import request from './request';

export default function getGeocode(address) {
  return request(`/geocode-api/${address}`)
    .then((response) => {
      if (response.data.err) {
        throw response.data.err;
      }
      const { latitude, longitude } = response.data[0];
      return { latitude, longitude };
    });
}
