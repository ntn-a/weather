const Weather = () => {
  const getWeather = async (location) => {
    let result = undefined
    try {
      await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=6c16868dba25d2011f8477b7422dbf02`, {mode: "cors"})
      .then(function(e) {
        result = e.json();
      })
      return result;
    } catch(e) {
      return result;
    }
  }
  return { getWeather };  
}

module.exports = Weather;