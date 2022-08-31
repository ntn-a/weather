const Weather = require("./weather.js");

const WeatherManager = () => {
  let locationData;
  let data;
  const setLocation = (newLocation) => {
    locationData = newLocation;
  }
  const getWeatherData = async () => {
    data = await Weather().getWeather(locationData);  
  }
  const getTemperature = () => {
    return data;
  }
  return { setLocation, getWeatherData, getTemperature };
}

module.exports = WeatherManager;