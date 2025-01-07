const convertToCelsius = function(fahrenheitTemp) {
  let newTemp = (fahrenheitTemp - 32) * 5/9;
  if (((fahrenheitTemp - 32) * 5) % 9 === 0) {
    return newTemp
  }
  else {
    return Number(newTemp.toFixed(1));
  }
};

const convertToFahrenheit = function(celsiusTemp) {
  let newTemp = (celsiusTemp * 9/5) + 32;
  if ((celsiusTemp *9) % 5 === 0) {
    return newTemp;
  }
  else {
    return Number(newTemp.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
