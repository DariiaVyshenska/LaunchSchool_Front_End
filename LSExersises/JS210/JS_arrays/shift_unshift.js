const shift = function shift(arr) {
  // if (arr.length === 0) return;
  //
  // let firstEl = arr[0]
  // for (let idx = 0; idx < arr.length - 1; ++idx) {
  //   arr[idx] = arr[idx + 1];
  // }
  // arr.length = arr.length - 1;
  //
  // return firstEl;

  return arr.splice(0, 1)[0]
};

const unshift = function unshift(arr, ...els) {
  // const unshiftOneEl = function unshiftOneEl(arr, el) {
  //   for (let idx = arr.length; idx > 0; --idx) {
  //     arr[idx] = arr[idx - 1];
  //   }
  //   arr[0] = el;
  // }
  //
  // els.reverse().forEach(el => unshiftOneEl(arr, el));

  for (let idx = els.length - 1; idx >= 0; --idx) {
    arr.splice(0, 0, els[idx]);
  }

  return arr.length;
};

// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
