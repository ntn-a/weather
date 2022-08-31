const WeatherManager = require("./weathermanager.js");
const Init = require("./init.js");
wm = WeatherManager();
document.body.appendChild(Init());

const search = document.querySelector(".search");
const input = document.querySelector(".input");
search.addEventListener("submit", (event) => {
  event.preventDefault();
  wm.setLocation(input.value)
  wm.getWeatherData().then(function(e) {
    console.log(wm.getTemperature());
  });
  input.value = "";
});