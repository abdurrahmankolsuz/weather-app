import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCityWeatherData } from '../actions';
import WeatherForecast from '../components/WeatherForecast';
import Header from '../components/Header';

export class WeatherInfoByLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidMount() {
    this.props.fetchData(this.props.match.params.cityId);
  }

  render() {
    return (
      <div className="location">
        <Header title={this.props.locationWeatherData.title} />
        <WeatherForecast
          weather={this.props.locationWeatherData.consolidated_weather}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: cityId => {
    dispatch(fetchCityWeatherData(cityId));
  }
});

const mapStateToProps = state => ({
  locationWeatherData: state.LocationWeatherData.locationWeatherData
});

export default connect(mapStateToProps, mapDispatchToProps)(
  WeatherInfoByLocation
);
