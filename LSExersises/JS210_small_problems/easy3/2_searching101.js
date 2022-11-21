// const findNum = function findNum() {
//   const ROUND_NUM = 5;
//   const numEnd = function numEnd(num) {
//     if (num === 1) return 'st';
//     if (num === 2) return 'nd';
//     if (num === 3) return 'rd';
//
//     return 'th';
//   }
//
//   let inputArr = [];
//   for (let i = 1; i <= ROUND_NUM; ++i) {
//     let usersNum = prompt(`Enter the ${i}${numEnd(i)} number: `);
//     inputArr.push(parseInt(usersNum, 10));
//   }
//
//   let lastNum = prompt('Enter the last number: ');
//   lastNum = parseInt(lastNum, 10);
//
//   let result = '';
//   if (inputArr.includes(lastNum)) {
//     result = 'appears';
//   } else {
//     result = 'does not appear';
//   }
//
//   let msg = `The number ${lastNum} ${result} in [${inputArr}].`
//   console.log('');
//   console.log(msg);
//
// };
//
// findNum();

// further exploration:
function isIncluded(arr, val) {
  // for (let i = 0; i < arr.length; i += 1) {
  //   if (arr[i] > val) {
  //     return true;
  //   }
  // }
  //
  // return false;

  const graterThan = (el) => el > val;
  return arr.some(graterThan);
}

let arr1 = [25, 15, 20, 17, 23];
let arr2 = [25, 15, 30, 17, 23];
console.log(isIncluded(arr1, 25));
console.log(isIncluded(arr2, 25));
