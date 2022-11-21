function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, lengthJ = cols.length; j < lengthJ; j += 1) {  // the problem was here
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }
  // console.log(`the length is in the outer scope! ${length}`);

  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

// getSelectedColumns(array1, [0]);     // [[1]];            expected: [[1, 4, 7]]
console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
// getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

// the problem was in initialization of variable length without its declaration
// so it's scoped to the function scope, not loop scope. and therefore we override it on line 5
// where we reasign it to the new value (cols.length return value). that is why
// our final output is one element shorter if the second argument of the function
// has length less than the first argument of the function.
