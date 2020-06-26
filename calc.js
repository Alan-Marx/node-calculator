const operations = require('./operations');

const readline = require('readline');

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

    Enter your choice: `, 
      choice => {
        console.log('\tHello!');
        rl.close();
      }
    )
  })
})
