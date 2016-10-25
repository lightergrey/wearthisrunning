const isDev = process.env.NODE_ENV !== 'production';
const dotenv = isDev ? require('dotenv') : false;
if (dotenv) {
  dotenv.load();
}
const ForecastIO = require('forecast-io');
const forecast = new ForecastIO(process.env.FORECASTIO_API_KEY);

function forecastAPI(req, res) {
  forecast
    .latitude(req.params.latitude)
    .longitude(req.params.longitude)
    .language('en')
    .exclude('minutely,daily,flags')
    .extendHourly(true)
    .get()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send({ err });
    });
}

module.exports = forecastAPI;
