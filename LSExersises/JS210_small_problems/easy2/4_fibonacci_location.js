const findFibonacciIndexByLength = function findFibonacciIndexByLength(digitsNum) {
  if (digitsNum === 1n) return 1n;

  let result = 2n;
  let num1 = 1n;
  let num2 = 1n;
  for (let num = 1n; String(num).length < digitsNum; num = num1 + num2) {
    result += 1n;
    [num1, num2] = [num2, num];
  }

  return result;
};

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);
