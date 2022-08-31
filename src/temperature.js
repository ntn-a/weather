const Temperature = () => {
  const roundToTwo = (number) => {
    return Math.round(number * 100) / 100;
  }
  const convertKelvinToCelsius = (kelvin) => roundToTwo(kelvin - 273.15);
  const convertCelsiusToKevlin = (celsius) => roundToTwo(celsius + 273.15);
  const convertCelsiusToFahrenheight = (celsius) => roundToTwo((celsius * 1.8) + 32);
  const convertFahrenheightToCelsius = (fahrenheight) => roundToTwo((fahrenheight - 32) / 1.8);
  return { 
    convertKelvinToCelsius,
    convertCelsiusToFahrenheight, 
    convertFahrenheightToCelsius,
    convertCelsiusToKevlin
  };
}

module.exports = Temperature;