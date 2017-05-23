const express = require('express');
const request = require('request');
const isDev = process.env.NODE_ENV !== 'production';
const dotenv = isDev ? require('dotenv') : false;
if (dotenv) {
  dotenv.load();
}

const app = express();

app.set('port', process.env.PORT || 3001);

app.use(express.compress());

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/locations', (req, res) => {
  const address = req.query.address;

  if (!address) {
    res.json({
      error: 'Missing required parameter `address`',
    });
    return;
  }

  req
    .pipe(
      request(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`
      )
    )
    .pipe(res);
});

app.get('/api/forecasts', (req, res) => {
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;

  if (!latitude || !longitude) {
    res.json({
      error: 'Missing required parameter `latitude` or `longitude`',
    });
    return;
  }

  req
    .pipe(
      request(
        `https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/${latitude},${longitude}`
      )
    )
    .pipe(res);
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
