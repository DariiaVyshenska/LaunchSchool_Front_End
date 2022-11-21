const stringToInteger = function stringToInteger(str) {
  const NUMBERS = Object.freeze({
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 0: 0,
  });
  let digits = str.split('');
  let multiplier = 1;
  let result = 0;
  for (let i = digits.length - 1; i >= 0; --i) {
    result += multiplier * NUMBERS[digits[i]];
    multiplier *= 10;
  }

  return result;
};

console.log(stringToInteger('4321') === 4321);      // 4321
console.log(stringToInteger('570') === 570);       // 570
