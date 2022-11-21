// function slice(array, begin, end) {
//   if (begin > array.length) begin = array.length;
//   if (end > array.length) end = array.length;
//
//   let newArr = [];
//   for (let idx = begin; idx < end; ++idx) {
//     newArr.push(array[idx]);
//   }
//
//   return newArr;
// }
//
// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]
//
// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...insertEls) {
  let removedEls = array.slice(start, start + deleteCount);

  let finalLen = array.length - deleteCount + insertEls.length;

  let arrIdx = array.length - 1;
  for (let idx = finalLen - 1; idx > start + deleteCount; --idx) {
    array[idx] = array[arrIdx];
    --arrIdx;
  }

  let idx = start;
  for (let insertIdx = 0; insertIdx < insertEls.length; ++insertIdx) {
    array[idx] = insertEls[insertIdx];
    ++idx;
  }

  return removedEls;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arrTmp = [1, 2, 3];
console.log(splice(arrTmp, 1, 1, 'two', 'three', 'four'));             // [2]
console.log(arrTmp);                                  // [1, "two", "three", "four", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]
