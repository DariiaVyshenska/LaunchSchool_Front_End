function getUserNum(prompt_str) {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt_str));
}

function multiplyNums(firstNum, secondNum) {
  return firstNum * secondNum;
}

let num1 = getUserNum('Enter the first number: ');
let num2 = getUserNum('Enter the second number: ');

console.log(`${num1} * ${num2} = ${multiplyNums(num1, num2)}`);
