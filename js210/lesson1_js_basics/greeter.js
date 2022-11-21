// let rlSync = require('readline-sync');
// let name = rlSync.question('What is your name? ');
// let surname = rlSync.question('What is your last name? ');
// console.log(`Hello, ${name} ${surname}!`);


function getUserInput(prompt_str) {
  let rlSync = require('readline-sync');
  return rlSync.question(prompt_str);
}

name = getUserInput('What is your name? ')
surname = getUserInput('What is your last name? ')
console.log(`Hello, ${name} ${surname}!`);
