const { add, subtract, multiply, divide, validateNumbers } = require('./operations');
const readline = require('readline');

const possibleOperations = {
  '1': { result: 'sum',        operation: add },
  '2': { result: 'difference', operation: subtract },
  '3': { result: 'product',    operation: multiply },
  '4': { result: 'quotient',   operation: divide }
}
  
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
Calc.js

Welcome to the Node.js Calculator app!
Version: 1.0.0.

Usage: The user will be prompted for two numbers, 
then asked to select their operation of choice.
`);

rl.question('Enter the first number: ', a => {
  rl.question('Enter the second number: ', b => {
    rl.question(
      `
Please select from the following options:

[1] Addition (+)
[2] Subtraction (-)
[3] Multiplication (x)
[4] Division (/)

Enter your choice: `, choice => {
      if (!validateNumbers(a, b)) {
        console.log('Only numbers are allowed! Please restart the program.')
      } else if (![1, 2, 3, 4].includes(Number(choice))) {
        console.log('You must select an option between 1 and 4! Please restart the program')
      } else {
        console.log(`The ${possibleOperations[choice].result} of ${a} and ${b} is ${possibleOperations[choice].operation(a, b)}`);
      }
      rl.close();
    }
    )
  })
})
