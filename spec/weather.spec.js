const { assertEquals } = require(`../test-framework`);
const Weather = require("../src/weather");

let weather;
let weatherArray = [];
let whatsTheWeather;
let expected;
let actual;
let result;

// Test W1
console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`Test W1 - Weather Testing - When calling getWeather, a random weather condition should be called`);

// Arrange
weather = new Weather;
weatherArray = [`clear`, `stormy`];
expected = true

// Act
const checkWeather = () => weather.getWeather();
actual = weatherArray.includes(checkWeather());

// Assert
result = assertEquals(expected, actual);
console.log(`Test W1 Result. The weather was one of the two options expected : ${result}`);

// Cleanup
weather = null;
weatherArray = [];
expected = undefined;
actual = undefined;
result = undefined;