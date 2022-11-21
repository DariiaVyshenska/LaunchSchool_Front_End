const integerToString = function integerToString(int) {
  const DIGITS = Object.freeze(['0', '1', '2', '3', '4', '5', '6', '7',
                                '8', '9']);
  let result = '';
  let digit;
  do {
    digit = int % 10;
    result = DIGITS[digit] + result;
    int = Math.floor(int / 10);
  } while (int >= 1)

  return result;
};

const signedIntegerToString = function signedIntegerToString(num) {
  let result;
  if (num < 0) {
    result = integerToString(-num);
    result = '-' + result;
  } else if (num === 0) {
    result = integerToString(num);
  } else {
    result = integerToString(num);
    result = '+' + result;
  }

  return result;
};

console.log(signedIntegerToString(4321) === '+4321');      // "+4321"
console.log(signedIntegerToString(-123) === '-123');      // "-123"
console.log(signedIntegerToString(0) === '0');         // "0"
