import React, {Component} from 'react';
import './styles.css';

import AddressInput from '../AddressInput/';
import LocationList from '../LocationList/';
import ForecastSelect from '../ForecastSelect/';
import ConditionList from '../ConditionList/';
import ApparelList from '../ApparelList/';

import Api from '../../utils/Api';
import getFeel from '../../utils/getFeel';
import getApparel from '../../utils/getApparel';
import getConditions from '../../utils/getConditions';

class App extends Component {
  state = {
    address: '',
    forecast: {},
    forecasts: [],
    location: {},
    locations: [],
  };

  onChangeAddress = address => {
    this.setState({
      address,
    });

    Api.locations(address, locations => {
      this.setState({
        locations,
      });
    });
  };

  onClickLocation = location => {
    this.setState({
      address: location.formatted_address,
      location,
      locations: [],
    });

    const {geometry: {location: {lat: latitude, lng: longitude}}} = location;
    Api.forecasts({latitude, longitude}, forecasts => {
      this.setState({
        forecasts,
      });

      // If we already had a selected forecast before we changed location
      if (this.state.forecast['time']) {
        this.setState({
          forecast: this.state.forecasts.find(
            forecast => forecast.time === this.state.forecast.time
          ) || {},
        });
      }

      // Use the first forecast if none is set
      if (!this.state.forecast['time']) {
        this.setState({
          forecast: forecasts[0],
        });
      }
    });
  };

  onChangeForecast = forecastTime => {
    this.setState({
      forecast: this.state.forecasts.find(
        forecast => forecast.time === forecastTime
      ),
    });
  };

  render() {
    const feel = getFeel(this.state.forecast);
    const className = `App ${feel}`;
    const conditions = getConditions(this.state.forecast);
    const apparel = getApparel(this.state.forecast);

    return (
      <div className={className}>
        <div className="inner">
          <AddressInput
            address={this.state.address}
            onChange={this.onChangeAddress}
          />
          <LocationList
            locations={this.state.locations}
            onClick={this.onClickLocation}
          />
          <ForecastSelect
            forecasts={this.state.forecasts}
            onChange={this.onChangeForecast}
          />
          <ConditionList conditions={conditions} />
          <ApparelList apparel={apparel} />
        </div>
      </div>
    );
  }
}

export default App;
