const convertToCelsius = function(temperatureFahrenheit) {
  return +((temperatureFahrenheit - 32) * (5/9)).toFixed(1);
};

const convertToFahrenheit = function(temperatureCelsius) {
  return Math.round((temperatureCelsius * (9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
