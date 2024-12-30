const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	return numArray.reduce((accumulator, value) =>
    accumulator + value, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, value) => accumulator * value, 1);
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
  if (num == 0) {
    return 1;
  }

	let product = num;
  for (let i = num-1; i >= 1; i--) {
    product *= i;
  }
  return product;
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
