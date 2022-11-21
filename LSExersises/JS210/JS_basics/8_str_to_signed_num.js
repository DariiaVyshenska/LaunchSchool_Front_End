const stringToSignedInteger = function stringToSignedInteger(str) {
  const NUMBERS = Object.freeze({
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 0: 0,
    '-': -1, '+': 1,
  });

  let digits = str.split('').reverse();
  let multiplier = 1;
  let result = 0;

  for (let digit of digits) {
    if (digit === '-' || digit === '+') {
      result *= NUMBERS[digit];
      break;
    }
    result += multiplier * NUMBERS[digit];
    multiplier *= 10;
  }

  return result;
};

console.log(stringToSignedInteger('4321') === 4321);      // 4321
console.log(stringToSignedInteger('570') === 570);       // 570
console.log(stringToSignedInteger('-570') === -570);
console.log(stringToSignedInteger('+570') === 570);
console.log(stringToSignedInteger('+100') === 100);      // 100
