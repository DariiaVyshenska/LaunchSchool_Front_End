// const myArray = [5, 5];
// myArray[-1] = 5;
// myArray[-2] = 5;
//
// function average(array) {
//   let sum = 0;
//
//   for (let i = -2; i < array.length; i += 1) {
//     sum += array[i];
//   }
//
//   return sum / array.length;
// }
//
// console.log(average(myArray)); // the reuslt will be 10, not 5
// the reason is that on line 12 we are dividing sum (which is 20) by the
// length (which is 2). the sum is 20 because in the for loop we are looping
// through all indexes: from -2 till 1. and the length is 2 because
// array length property is always max index num + 1

// further exploration
const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;
  let count = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
    count += 1;
  }

  return sum / count;
}

console.log(average(myArray));
