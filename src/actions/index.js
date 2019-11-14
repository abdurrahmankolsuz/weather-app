import * as types from '../constants/ActionTypes';

export const citySearchAction = searchText => {
  return async dispatch => {
    const url = `https://www.metaweather.com/api/location/search/?query=${searchText}`;
    fetch(url)
      .then(res => res.json())
      .then(searchCityResults =>
        dispatch({
          type: types.FETCHED_CITY,
          payload: {
            searchCityResults
          }
        })
      ).catch(error => console.log(error))
  };
};

export const fetchCityWeatherData = locationId => {
  return async dispatch => {
    const url = `https://www.metaweather.com/api/location/${locationId}`;
    fetch(url)
    .then(res => res.json())
    .then(locationWeatherData =>
      dispatch({
        type: types.FETCHED_CITY_WEATHER_DATA,
        payload: {
          locationWeatherData
        }
      })
    ).catch(error => console.log(error))
  };
};
