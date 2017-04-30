function locations(address, callback) {
  return fetch(`api/locations?address=${address}`, {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data.results)
    .then(callback);
}

function forecasts({latitude, longitude}, callback) {
  return fetch(`api/forecasts?latitude=${latitude}&longitude=${longitude}`, {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data.hourly.data)
    .then(callback);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Api = {locations, forecasts};
export default Api;
