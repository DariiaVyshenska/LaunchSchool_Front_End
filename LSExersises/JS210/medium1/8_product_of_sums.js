function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;  // it will not produce the sum of array elements because undefined + any number will return NaN

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}
// the total function will return NaN and productOfSums function therefore will also return NaN which is
// not what expected.
