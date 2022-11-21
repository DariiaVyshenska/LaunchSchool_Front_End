let rlSync = require('readline-sync');
let selInt = rlSync.question('Please enter an integer greater than 0: ');
let type = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
const validateInt = function validateInt(str) {
  return !!(parseInt(str) && !(str.match(/\./)) && parseInt(str) > 0);
};

const validateOperation = function validateOperation(str) {
  return !!(str === 's' || str === 'p');
}

const errorMsg = function errorMsg(int, type) {
  let result;
  if (!validateInt(int)) {
    result = 'Error! You entered incorrect integer. Exiting program.'
  } else if (!validateOperation(type)) {
    result = 'Error! This operation is not supported. Exiting program.'
  }
  return result;
}

let error = errorMsg(selInt, type);
if (error) {
  console.log(error);
} else {
  let currFun;
  let msgTypeWord;
  if (type === 's') {
    currFun = (a, b) => a + b;
    msgTypeWord = 'sum';
  } else if (type === 'p') {
    currFun = (a, b) => a * b;
    msgTypeWord = 'product';
  }

  selInt = parseInt(selInt, 10);
  let result = 1;
  for (let i = result + 1; i <= selInt; ++i) {
    result = currFun(result, i);
  }

  console.log()
  console.log(`The ${msgTypeWord} of the integers between 1 and ${selInt} is ${result}.`)
}
