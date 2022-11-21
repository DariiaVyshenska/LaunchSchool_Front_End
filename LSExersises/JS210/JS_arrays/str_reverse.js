function reverse(arg) {
  const reverseArr = function reverseArr(arr) {
    let newArr = [];
    for (let idx = arr.length - 1; idx >= 0; --idx) {
      newArr.push(arr[idx]);
    }

    return newArr;
  };

  const reverseStr = function reverseStr(str) {
    let newStr = '';
    for (let idx = str.length - 1; idx >= 0; --idx) {
      newStr += str[idx];
    }

    return newStr;
  };

  let result;

  if (Array.isArray(arg)) {
    result = reverseArr(arg);
  } else if (typeof(arg) === 'string') {
    result = reverseStr(arg);
  }

  return result;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
