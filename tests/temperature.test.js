const Temperature = require('../src/temperature.js');

test("Check Kelvin to Celsius, 1", () => {
  expect(Temperature().convertKelvinToCelsius(0)).toBe(-273.15);
});

test("Check Kelvin to Celsius, 2", () => {
  expect(Temperature().convertKelvinToCelsius(273.15)).toBe(0);
});

test("Check Kelvin to Celsius, 3", () => {
  expect(Temperature().convertKelvinToCelsius(609.32)).toBe(336.17);
});

test("Check Celsius to Fahrenheight, 1", () => {
  expect(Temperature().convertCelsiusToFahrenheight(0)).toBe(32.0);
});

test("Check Celsius to Fahrenheight, 2", () => {
  expect(Temperature().convertCelsiusToFahrenheight(40)).toBe(104);
})

test("Check Celsius to Fahrenheight, 3", () => {
  expect(Temperature().convertCelsiusToFahrenheight(33.33)).toBe(91.99);
});

test("Check Fahrenheight to Celsius, 1", () => {
  expect(Temperature().convertFahrenheightToCelsius(32)).toBe(0);
});

test("Check Fahrenheight to Celsius, 2", () => {
  expect(Temperature().convertFahrenheightToCelsius(104)).toBe(40);
});

test("Check Fahrenheight to Celsius, 3", () => {
  expect(Temperature().convertFahrenheightToCelsius(91.99)).toBe(33.33);
});