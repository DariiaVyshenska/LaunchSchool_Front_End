// // Odd numbers
// const logOddNumbers = function logOddNumbers(num) {
//   for (let currNum = 1; currNum <= num; currNum += 2) {
//     console.log(currNum);
//   }
// };
//
// logOddNumbers(19);
//
// // Multiples of 3 and 5
// const multiplesOfThreeAndFive = function multiplesOfThreeAndFive() {
//   for (let num = 1; num <= 100; ++num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//       console.log(`${String(num)}!`);
//     } else if (num % 3 === 0 || num % 5 === 0) {
//       console.log(String(num));
//     }
//   }
// };
// multiplesOfThreeAndFive()
//
// // Print multiples
// const logMultiples = function logMultiples(num) {
//   for (let i = 100; i > 0; --i) {
//     // console.log(i);
//     if (i % num === 0 && i % 2 !== 0) console.log(i);
//   }
// };
//
// logMultiples(17);
// console.log('---')
// logMultiples(21);
//
// // FizzBuzz
// const fizzbuzz = function fizzbuzz() {
//   for (let num = 1; num <= 100; ++num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (num % 5 === 0) {
//       console.log('Buzz');
//     } else if (num % 3 === 0) {
//       console.log('Fizz');
//     } else {
//       console.log(num);
//     }
//   }
// };
//
// fizzbuzz();
//
// // Prime Check
const isPrime = function isPrime(num) {
  if (num === 0 || num === 1) return false;

  for (let iter = 2; iter < num; ++iter) {
    if (num % iter === 0) return false;
  }

  return true;
};
//
// console.log(isPrime(1));   // false
// console.log(isPrime(2));   // true
// console.log(isPrime(3));   // true
// console.log(isPrime(43));  // true
// console.log(isPrime(55));  // false
// console.log(isPrime(0));   // false
//
// // XOR
// const isXor = function isXor(val1, val2) {
//   return !!((val1 || val2) && !(val1 && val2));
// };
//
// console.log(isXor(false, true));     // true
// console.log(isXor(true, false));     // true
// console.log(isXor(false, false));    // false
// console.log(isXor(true, true));      // false
//
//
// console.log(isXor(false, 3));        // true
// console.log(isXor('a', undefined));  // true
// console.log(isXor(null, ''));        // false
// console.log(isXor('2', 23));         // false

// Guessing the Password
//
// const maxCount = 3;
// let truePass = 'password';
//
// const checkPass = function checkPass(maxCount, truePass) {
//   let rlSync = require('readline-sync');
//   let enteredPass;
//   let msg = 'You have been denied access.';
//
//   for (let count = 1; count <= maxCount; ++count) {
//     enteredPass = rlSync.question('What is the password: ');
//     if (enteredPass === truePass) {
//       msg = 'You have successfully logged in.';
//       break;
//     }
//   }
//   console.log(msg);
// }
//
// checkPass(maxCount, truePass);
//
// // Student Grade
// const examNumbs = 3;
// let rlSync = require('readline-sync');
// let scores = [];
//
// for (let count = 1; count <= examNumbs; ++count) {
//   scores.push(Number(rlSync.question(`Enter score ${count}: `)))
// }
//
// scoreAve = scores.reduce((acc, el) => acc + el/examNumbs, 0);
//
// let grade;
// if (scoreAve >= 90) {
//   grade = 'A';
// } else if (scoreAve >= 70) {
//   grade = 'B';
// } else if (scoreAve >= 50) {
//   grade = 'C';
// } else {
//   grade = 'F';
// }
//
// msg = `Based on the average of your ${examNumbs} scores your letter \
// grade is "${grade}".`;
//
// console.log(msg);
//
// // Greatest Common Divisor
// const gcd = function gcd(a, b) {
//   let div = a < b ? a : b;
//   while (div > 0) {
//     if (a % div === 0 && b % div === 0) {
//       break;
//     }
//     div -= 1;
//   }
//
//   return div;
// }
// // console.log(gcd(12, 4));
// // console.log(gcd(15, 10));
// // console.log(gcd(9, 2));
// // console.log(gcd(9, 0));
//
// // Further exploration (uses function gcd() from above)
// const gcdArr = function gcdArr(arr1, arr2) {
//   if (arr2.length === 1) return gcd(arr1[0], arr2[0]);
//
//   let newArr1 = arr2.slice(0, 1);
//   let newArr2 = arr2.slice(1);
//   return gcdArr(arr1, [gcdArr(newArr1, newArr2)]);
// }
//
// const recursiveGcd = function recursiveGcd(arr) {
//   let arr1 = arr.slice(0, 1);
//   let arr2 = arr.slice(1);
//
//   return gcdArr(arr1, arr2);
// }
//
// console.log(recursiveGcd([12, 4, 8]));

// Goldbach numbers
//
// const checkGoldbach = function checkGoldbach(expectedSum) {
//   if (expectedSum < 4 || expectedSum % 2 === 1) {
//     console.log(null);
//     return;
//   }
//
//   for (let firstNumber = 2; firstNumber <= expectedSum / 2; firstNumber += 1) {
//     let secondNumber = expectedSum - firstNumber;
//     if (isPrime(firstNumber) && isPrime(secondNumber)) console.log(firstNumber, secondNumber);
//   }
// }
//
// checkGoldbach(3);
// console.log('---');
// checkGoldbach(4);
// console.log('---');
// checkGoldbach(12);
// console.log('---');
// checkGoldbach(100);

// Pattern generation
//
// const generatePattern = function generatePattern(maxRowNum) {
//   for (let currRow = 1; currRow <= maxRowNum; ++currRow) {
//     let currStr = '';
//     for (let num = 1; num <= currRow; ++num) {
//       currStr += num;
//     }
//
//     for (let starNum = maxRowNum - currRow; starNum > 0; --starNum) {
//       currStr += '*';
//     }
//     console.log(currStr);
//   }
// }
//
// generatePattern(7);
//
// Further exploration
//
// const generatePattern = function generatePattern(maxRowNum) {
//   let finalRow = '';
//   for (let digit = 1; digit <= maxRowNum; ++digit) {
//     finalRow += digit;
//   }
//   let rowLen = finalRow.length;
//   for (let currRow = 1; currRow <= maxRowNum; ++currRow) {
//     let currStr = '';
//     for (let num = 1; num <= currRow; ++num) {
//       currStr += num;
//     }
//
//     for (let starNum = rowLen - currStr.length; starNum > 0; --starNum) {
//       currStr += '*';
//     }
//     console.log(currStr);
//   }
// }
//
// generatePattern(20);
//
// // Index of Substring
// function indexOf(firstString, secondString) {
//   let idxSearchEnd = firstString.length - secondString.length;
//   for (let idxMatch = 0; idxMatch <= idxSearchEnd; ++idxMatch) {
//     let match = true;
//
//     let firstIdx = idxMatch;
//     for (let secondIdx = 0; secondIdx < secondString.length; ++secondIdx) {
//       if (firstString[firstIdx] !== secondString[secondIdx]) {
//         match = false;
//         break;
//       }
//       ++firstIdx;
//     }
//
//     if (match) return idxMatch;
//   }
//
//   return -1;
// }

// function lastIndexOf(firstString, secondString) {
  // ONE WAY
  // let searchStart = firstString.length - secondString.length;
  // let result = -1;
  // for (searchStart; searchStart > 0; --searchStart) {
  //   let searchEnd = searchStart + secondString.length;
  //   result = indexOf(firstString.slice(searchStart, searchEnd), secondString);
  //   if (result === 0) return searchStart;
  // }
  //
  // return result;

  // BETTER WAY
//   const reverseStr = function reverseStr(str) {
//     return str.split('').reverse().join('');
//   }
//
//   let revIdx = indexOf(reverseStr(firstString), reverseStr(secondString));
//   if(revIdx === -1) return revIdx;
//
//   return firstString.length - (revIdx + secondString.length);
// }

// console.log(indexOf('Some strings', 's'));                      // 5
// console.log(indexOf('Blue Whale', 'Whale'));                    // 5
// console.log(indexOf('Blue Whale', 'Blute'));                    // -1
// console.log(indexOf('Blue Whale', 'leB'));                      // -1
// console.log(indexOf('Blue', 'ue'));                             // 2
// console.log(indexOf('s', 'String'));                    // -1
//
// console.log(lastIndexOf('Some strings', 's'));                  // 11
// console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
// console.log(lastIndexOf('Blue Whale, Killer Whale smth', 'Whale'));  // 19
// console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1
//
// // Trimming Spaces
// const trim = function trim(str) {
//   let cleanStr = '';
//
//   let firstIdx;
//   for (let idx = 0; idx < str.length; ++idx) {
//     if (str[idx] !== ' ') {
//       firstIdx = idx;
//       break;
//     }
//   }
//
//   let lastIdx;
//   for (let idx = str.length - 1; idx >= 0; --idx) {
//     if (str[idx] !== ' ') {
//       lastIdx = idx;
//       break;
//     }
//   }
//
//   for (let idx = firstIdx; idx <= lastIdx; ++idx) {
//     cleanStr += str[idx];
//   }
//
//   return `'${cleanStr}'`;
// };
//
// console.log(trim('  abc  '));  // "abc"
// console.log(trim('abc   '));   // "abc"
// console.log(trim(' ab c'));    // "ab c"
// console.log(trim(' a b  c'));  // "a b  c"
// console.log(trim('      '));   // ""
// console.log(trim(''));         // ""
//
// // Splitting a String
//
// const splitString = function splitString(str, del) {
//   if (del === undefined) {
//     console.log('ERROR: No delimiter');
//     return;
//   }
//
//   let currStr = '';
//   for (let idx = 0; idx < str.length; ++idx) {
//     if (del === '') {
//       console.log(str[idx]);
//     } else if (str[idx] === del) {
//       console.log(currStr);
//       currStr = '';
//     } else {
//       currStr += str[idx];
//       if (idx === str.length - 1) console.log(currStr);
//     }
//   }
// }
//
// splitString('abc,123,hello world', ',');
// // logs:
// // abc
// // 123
// // hello world
//
// splitString('hello');
// // logs:
// // ERROR: No delimiter
//
// splitString('hello', '');
// // logs:
// // h
// // e
// // l
// // l
// // o
//
// splitString('hello', ';');
// // logs:
// // hello
//
// splitString(';hello;', ';');
// // logs:
// //  (this is a blank line)
// // hello
//
// // Repeating Strings
//
// const repeat = function repeat (str, times) {
//   if (Number(times) !== times || times < 0) {
//     return;
//   }
//
//   let newStr = '';
//   for (let i = times; i > 0; --i) {
//     newStr += str;
//   }
//   return newStr;
// }
//
// console.log(repeat('abc', 1));       // "abc"
// console.log(repeat('abc', 2));       // "abcabc"
// console.log(repeat('abc', -1));      // undefined
// console.log(repeat('abc', 0));       // ""
// console.log(repeat('abc', 'a'));     // undefined
// console.log(repeat('abc', false));   // undefined
// console.log(repeat('abc', null));    // undefined
// console.log(repeat('abc', '  '));    // undefined
//
// // String StartsWith
// const startsWith = function startsWith(str, searchStr) {
//   for (let idx = 0; idx < searchStr.length; ++idx) {
//     if (str[idx] !== searchStr[idx]) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// let str = 'We put comprehension and mastery above all else';
// console.log(startsWith(str, 'We'));              // true
// console.log(startsWith(str, 'We put'));          // true
// console.log(startsWith(str, ''));                // true
// console.log(startsWith(str, 'put'));             // false
//
// let longerString = 'We put comprehension and mastery above all else!';
// console.log(startsWith(str, longerString));      // false
//
// // Converting Strings to Lower Case
// function toLowerCase(string) {
//   const CONVERTION_OFFSET =
//   let newStr = '';
//   for (let idx = 0; idx < string.length; ++idx) {
//     let asciiNum = string[idx].charCodeAt(0);
//     if (asciiNum > 64 && asciiNum < 91) asciiNum += CONVERTION_OFFSET;
//     newStr += String.fromCharCode(asciiNum);
//   }
//
//   return newStr;
// }
//
// console.log(toLowerCase('ALPHABET'));    // "alphabet"
// console.log(toLowerCase('123'));         // "123"
// console.log(toLowerCase('abcDEF'));      // "abcdef"
//
// // Substring (1)
// function substr(string, start, length) {
//   if (start < 0) start = string.length + start;
//
//   let newStr = '';
//   for (let idx = start; idx < start + length; ++idx) {
//     if (idx === string.length) break;
//
//     newStr += string[idx];
//   }
//
//   return `'${newStr}'`;
// }
//
// let string = 'hello world';
//
// console.log(substr(string, 2, 4));      // "llo "
// console.log(substr(string, -3, 2));     // "rl"
// console.log(substr(string, 8, 20));     // "rld"
// console.log(substr(string, 0, -20));    // ""
// console.log(substr(string, 0, 0));      // ""
//
// // Substring (2)
// function substring(string, start, end) {
//   if (Number.isNaN(start) || !Number(start) || start < 0) start = 0;
//   if (Number.isNaN(end) || end < 0) end = 0;
//   if (end === undefined) end = string.length;
//
//   if (start > string.length) start = string.length;
//   if (end > string.length) end = string.length;
//
//   if (start > end) {
//     [start, end] = [end, start];
//   }
//
//   let newStr = '';
//
//   for (let idx = start; idx < end; ++idx) {
//     newStr += string[idx];
//   }
//
//   return `'${newStr}'`;
// }
//
// let string = 'hello world';
//
// console.log(substring(string, 2, 4));    // "ll"
// console.log(substring(string, 4, 2));    // "ll"
// console.log(substring(string, 0, -1));   // ""
// console.log(substring(string, 2));       // "llo world"
// console.log(substring(string, 'a'));     // "hello world"
// console.log(substring(string, 8, 20));   // "rld"
// console.log(substring(string, NaN, NaN));   // ''
// console.log(substring(string, 20, 20));    // ''
