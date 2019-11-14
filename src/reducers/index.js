import { combineReducers } from "redux";
import CitySearch from "./CitySearch";
import LocationWeatherData from "./LocationWeatherData";

const weatherApp = combineReducers({
  CitySearch,
  LocationWeatherData
});

export default weatherApp;
