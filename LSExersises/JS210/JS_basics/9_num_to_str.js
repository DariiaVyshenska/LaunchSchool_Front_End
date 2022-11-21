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

console.log(integerToString(4321) === '4321');      // "4321"
console.log(integerToString(0) === '0');         // "0"
console.log(integerToString(5000) === '5000');      // "5000"
