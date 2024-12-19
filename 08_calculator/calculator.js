const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((sum, x) => add(sum, x), 0);
};

const multiply = function(numbers) {
  return numbers.reduce((sum, x) => sum * x, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(number) {
  if(number === 0) {
    return 1;
  }
  
  let total = 1;
  for(let i = number; i > 0; --i) {
    total *= i;
  }
  return total;
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
