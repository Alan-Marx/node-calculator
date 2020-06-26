const add = (a, b) => +a + +b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const validateNumbers = (a, b) => !(isNaN(a) || isNaN(b));

module.exports = { 
  add,
  subtract,
  multiply,
  divide,
  validateNumbers
};