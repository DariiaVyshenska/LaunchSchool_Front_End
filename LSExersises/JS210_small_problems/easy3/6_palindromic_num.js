const isPalindrome = function isPalindrome(str) {
  let revStr = str.split('').reverse().join('');
  return str === revStr;
};

const isPalindromicNumber = function isPalindromicNumber(num) {
  console.log(num.toString());
  console.log(num);
  return isPalindrome(num.toString());
};

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
console.log(isPalindromicNumber(00022));           // true
