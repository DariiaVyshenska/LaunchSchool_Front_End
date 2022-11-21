// // 1.
// const lastInArray = arr => arr[arr.length - 1];
//
// console.log(lastInArray([1, 2, 3, 4]));

// // 2.
// const rollCall = function rollCall(arr) {
//   for (let idx = 0; idx < arr.length; ++idx) {
//     console.log(arr[idx]);
//   }
// };
//
// rollCall(['Dariia', 'Oleksii', 'Barbos', 'Komoe']);

// // 3.
// const reverseArr = function reverseArr(arr) {
//   let newArr = [];
//   for (let idx = arr.length - 1; idx >= 0; --idx) {
//     newArr.push(arr[idx]);
//   }
//   return newArr;
// }
//
// console.log(reverseArr([1, 2, 3]));

// // 4.
// const arrToStr = function arrToStr(arr) {
//   let str = '';
//   for(let idx = 0; idx < arr.length; ++idx) {
//     str += String(arr[idx]);
//   }
//   return str;
// };
//
// console.log(arrToStr([1, 'a', 4]));

// // push method
// const push = function push(arr, newEl) {
//   arr[arr.length] = newEl;
//   return arr.length;
// };
//
// let count = [0, 1, 2];
// console.log(push(count, 3));         // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

// // pop method
// const pop = function pop(arr) {
//   if (arr.length === 0) return undefined;
//
//   let lastIdx = arr.length - 1;
//   let lastEl = arr[lastIdx];
//   arr.length = lastIdx;
//
//   return lastEl;
// };
//
// let count = [1, 2, 3];
// console.log(pop(count));             // 3
// console.log(count);                  // [ 1, 2 ]

// // unshift
// const unshift = function unshift(arr, value) {
//   for (let newIdx = arr.length; newIdx > 0; --newIdx) {
//     arr[newIdx] = arr[newIdx - 1];
//   }
//   arr[0] = value;
//   return arr.length;
// };
//
// let count = [1, 2, 3];
// console.log(unshift(count, 0));      // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

// // shift
// const shift = function shift(arr) {
//   if (arr.length === 0) return undefined;
//
//   let firstVal = arr[0];
//   for (let idx = 0; idx < arr.length - 1; ++idx) {
//     arr[idx] = arr[idx + 1]
//   }
//   arr.length = arr.length - 1;
//   return firstVal;
// };
//
// let count = [1, 2, 3];
// console.log(shift(count));           // 1
// console.log(count);                  // [ 2, 3 ]

// // indexOf
// const indexOf = function indexOf(arr, value) {
//   for (let idx = 0; idx < arr.length; ++idx) {
//     if (arr[idx] === value) return idx;
//   }
//
//   return -1;
// };
//
// console.log(indexOf([1, 2, 3, 3], 3));         // 2
// console.log(indexOf([1, 2, 3], 4));            // -1

// // lastIndexOf
// const lastIndexOf = function lastIndexOf(arr, value) {
//   for (let idx = arr.length - 1; idx >=0; --idx) {
//     if (arr[idx] === value) return idx;
//   }
//
//   return -1;
// };
//
// console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
// console.log(lastIndexOf([1, 2, 3], 4));        // -1

// // slice
// const slice = function slice(arr, startIdx, endIdx) {
//   let newArr = [];
//   for (let idx = startIdx; idx < endIdx; ++idx) {
//     // newArr.push(arr[idx]);
//     push(newArr, arr[idx]);
//   }
//
//   return newArr;
// };
//
// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

// // splice
// const splice = function splice(arr, startIdx, valNum) {
//   let newIdx = 0;
//   let splicedArr = [];
//   for (let idx = 0; idx < arr.length; ++idx) {
//     if (idx >= startIdx && idx < startIdx + valNum) {
//       splicedArr.push(arr[idx]);
//       continue;
//     }
//
//     arr[newIdx] = arr[idx];
//     newIdx += 1;
//   }
//
//   arr.length = newIdx;
//   return splicedArr;
// };
//
// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]

// // concat
// const concat = function concat(arr1, arr2) {
//   let newArr = [];
//   for (let idx = 0; idx < arr1.length; ++idx) {
//     newArr.push(arr1[idx]);
//   }
//   for (let idx = 0; idx < arr2.length; ++idx) {
//     newArr.push(arr2[idx]);
//   }
//   return newArr;
// };
//
// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

// // join
// const join = function join(arr, separator) {
//   let result = '';
//   for (let idx = 0; idx < arr.length - 1; ++idx) {
//     result += String(arr[idx]) + separator;
//   }
//   result += String(arr[arr.length - 1]);
//   return result;
// };
//
// console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
// console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'

// // array equality
// const arraysEqual = function arraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//
//   for (let idx = 0; idx < arr1.length; ++idx) {
//     if (arr1[idx] !== arr2[idx]) return false;
//   }
//   return true;
// };
//
// console.log(arraysEqual([1], [1]) === true);                               // true
// console.log(arraysEqual([1], [2]) === false);                               // false
// console.log(arraysEqual([1, 2], [1, 2, 3]) === false);                      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]) === true);       // true
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]) === false);      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]) === false);    // false
// console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]) === false);       // false

// // first element
// const firstElementOf = function firstElementOf(arr) {
//   return arr[0];
// }
//
// console.log(firstElementOf(['U', 'S', 'A'])); // returns "U"

// // last element
// const lastElementOf = function lastElementOf(arr) {
//   return arr[arr.length - 1];
// }
//
// console.log(lastElementOf(['U', 'S', 'A']));  // returns "A"

// // nth element
// function nthElementOf(arr, index) {
//   return arr[index];
// }
//
// let digits = [4, 8, 15, 16, 23, 42];
//
// console.log(nthElementOf(digits, 3));   // returns 16
// console.log(nthElementOf(digits, 8));   // undefined
// console.log(nthElementOf(digits, -1));  // undefined

// yes we can because array is an object. the new element will have the
// negative index and will be inaccessible by some methods (such as forEach)
//and the length of the array will remain unchanged

// // count
// function firstNOf(arr, count) {
//   return arr.slice(0, count);
// }
//
// let digits = [4, 8, 15, 16, 23, 42];
// console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

// // last count
// function lastNOf(arr, count) {
//   let startPosition = arr.length - count;
//   if (startPosition < 0) startPosition = 0;
//   return arr.slice(startPosition);
// }
//
// let digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 3));    // returns [16, 23, 42]
// console.log(lastNOf(digits, 8));

// // ends of
// function endsOf(beginningArr, endingArr) {
//   return [beginningArr[0], endingArr[endingArr.length - 1]];
// }
//
// console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]

// Practice problems #2
// // 1.
// function oddElementsOf(arr) {
//   let newArr = [];
//
//   for (let idx = 1; idx < arr.length; idx += 2) {
//     newArr.push(arr[idx]);
//   }
//
//   return newArr;
// }
//
// let digits = [4, 8, 15, 16, 23, 42];
//
// console.log(oddElementsOf(digits));    // returns [8, 16, 42]

// // 2.
// let mirrorArr = function mirrorArr(arr) {
//   let reversedArr = arr.slice().reverse();
//   return arr.concat(reversedArr);
// }
//
// console.log(mirrorArr(['a', 'b', 'c']));

// // 3.
// function sortDescending(arr) {
//   const compareFn = function compareFn(a, b) {
//     if (a < b) {
//       return 1;
//     } else if (a > b) {
//       return -1;
//     } else if (a === b) {
//       return 0;
//     }
//   }
//
//   return arr.slice().sort(compareFn);
// }
//
// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// // 4.
// function matrixSums(arr) {
//   let result = [];
//   arr.forEach(function(el) {
//     result.push(el.reduce((el, acc) => acc + el, 0));
//   });
//
//   return result;
// }
//
// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

// // 5.
// function uniqueElements(arr) {
//   let result = [];
//
//   arr.forEach(function(el) {
//     let isPushed = !(result.indexOf(el) === -1);
//     if (!isPushed) result.push(el);
//   });
//
//   return result;
// }
//
// console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]

// // missing numbers
// const missing = function missing(arr) {
//   let result = [];
//
//   for (let num = arr[0] + 1; num < arr[arr.length - 1]; ++num) {
//     if (arr.indexOf(num) === -1) result.push(num);
//   }
//
//   return result;
// };
//
// console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
// console.log(missing([1, 2, 3, 4]));                    // []
// console.log(missing([1, 5]));                          // [2, 3, 4]
// console.log(missing([6]));                             // []
