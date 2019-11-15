import React from 'react';
import DayWeatherInfo from './DayWeatherInfo';

const WeatherForecast = ({weather}) => {
  if (weather) {
    return (
      <ul class="list-group">
        { weather.map( (weatherDetail) => {
            return <DayWeatherInfo key={weatherDetail.id} info={weatherDetail} />;
          })
        }
      </ul>
    )
  }
  else {
    return null;
  }
}

export default WeatherForecast;
