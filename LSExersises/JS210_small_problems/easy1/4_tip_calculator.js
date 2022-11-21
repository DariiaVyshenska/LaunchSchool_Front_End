let rlSync = require('readline-sync');
let bill = rlSync.question('What is the bill? ');
bill = parseFloat(bill);
let tipPerc = rlSync.question('What is the tip percentage? ');
tipPerc = parseFloat(tipPerc);

let tip = (tipPerc / 100) * bill;
let total = bill + tip;

console.log('')
console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
