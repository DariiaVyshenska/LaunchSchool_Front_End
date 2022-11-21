function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  const sortedCopy = (arr) => arr.slice().sort();

  arr1 = sortedCopy(array1);
  arr2 = sortedCopy(array2);

  for (let idx = 0; idx < arr1.length; ++idx) {
    if (arr1[idx] !== arr2[idx]) return false;
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]) === true);                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]) === true);                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']) === true);      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]) === false);                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]) === true);            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]) === false);            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]) === false);            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]) === false);                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]) === false);                     // false
console.log(areArraysEqual([1, 1], [1, 1]) === true);                        // true
