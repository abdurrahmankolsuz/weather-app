import React from 'react';
import { Link } from 'react-router-dom';
// import CityMap from './CityMap';

const CityList = ({ city }) => {
  if (city.length > 0) {
    return (<div className="city-list">
      {city.map((city) => {
        return (
          <div className="city-name" key={city.woeid}>
            <Link to={"/location/" + city.woeid} className="city-link">{city.title}</Link>
            {/* <CityMap /> */}
          </div>
        )
      })
      }
    </div>

    );
  }
  else {
    return <div class="alert alert-danger" role="alert">No city found!</div>;
  }
};

export default CityList;
