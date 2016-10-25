const nodeGeocoder = require('node-geocoder');

const isDev = process.env.NODE_ENV !== 'production';
const dotenv = isDev ? require('dotenv') : false;
if (dotenv) {
  dotenv.load();
}

const options = {
  provider: 'google',
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
  formatter: null,
};

const geocoder = nodeGeocoder(options);

function geocodeAPI(req, res) {
  geocoder
    .geocode(req.params.address)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send({ err });
    });
}

module.exports = geocodeAPI;
