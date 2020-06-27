const { add, subtract, multiply, divide, validateNumbers } = require('./operations');
const readline = require('readline');

const possibleOperations = {
  '1': { result: 'sum',        operation: add },
  '2': { result: 'difference', operation: subtract },
  '3': { result: 'product',    operation: multiply },
  '4': { result: 'quotient',   operation: divide }
}

const caclApp = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  console.log('\nCalc.js\n\nWelcome to the Node.js Calculator app!\nVersion: 1.0.0.\n\nUsage: The user will be prompted for two numbers,\nthen asked to select their operation of choice.\n');
  
  rl.question('Enter the first number: ', a => {
    rl.question('\nEnter the second number: ', b => {
      rl.question('\nPlease select from the following options:\n\n[1] Addition (+)\n[2] Subtraction (-)\n[3] Multiplication (x)\n[4] Division (/)\n\nEnter your choice: ', choice => {
        if (!validateNumbers(a, b)) {
          console.log('\nOnly numbers are allowed!')
        } else if (![1, 2, 3, 4].includes(Number(choice))) {
          console.log('\nYou must select an option between 1 and 4!')
        } else {
          console.log(`\nThe ${possibleOperations[choice].result} of ${a} and ${b} is ${possibleOperations[choice].operation(a, b)}`);
        }
        rl.question('\nWould you like to perform another calculation? (y/n): ', answer => {
          rl.close();
          if (answer === 'y') caclApp();
        })
      }
      )
    })
  })
}

caclApp();