import React from 'react';
import { ReactComponent as Rain } from '../assets/rain.svg';
import { ReactComponent as Cloud } from '../assets/clouds.svg';
import { ReactComponent as Sunny } from '../assets/sunny.svg';

const DayWeatherInfo = ({ info }) => {

  return (
    <li class="list-group-item">
      <h4 className="forecast__date">{info.applicable_date}</h4>
      <h2 className="forecast__state">{info.weather_state_name}</h2>
      {(() => {
        switch (info.weather_state_abbr) {
          case ("hc" || "lc"): return <Cloud width={30} height={30} />;
          case "c": return <Sunny width={30} height={30} />;
          case ("s" || "hr" || "lr"): return <Rain width={30} height={30} />;
          default: return <Sunny width={30} height={30} />;
        }
      })()}
    </li>
  );
};

export default DayWeatherInfo;
