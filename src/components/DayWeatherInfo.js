import React from 'react';
import { ForeCastStateIconClassNameMappings } from '../constants/ForeCastStateIconClassNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud ,faSun} from "@fortawesome/free-solid-svg-icons";

const DayWeatherInfo = ({ info }) => {
  const iconClassName = ForeCastStateIconClassNameMappings[info.weather_state_abbr];
  return (
    <section className="forecast">
      <div className="forecast-info">
        <h4 className="forecast__date">{info.applicable_date}</h4>
        <h2 className="forecast__state">{info.weather_state_name}</h2>
      </div>
      <div className="forecaste-state">
         <div><i className={iconClassName}></i></div>
      </div>
    </section>
  );
};

export default DayWeatherInfo;
