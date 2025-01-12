const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
  arr.map(item => {
    sum = sum + parseInt(item);
  });
  return sum;
};

const multiply = function(arr) {
  let result = 1;
  arr.map(item => {
    result =result * parseInt(item);
  });
  return result;
};

const power = function(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result = result * a;
  }
  return result;
};

const factorial = function(a) {
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result = result * i;
  }
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
