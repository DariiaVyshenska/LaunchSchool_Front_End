const isPalindrome = function isPalindrome(str) {
  let revStr = str.split('').reverse().join('');
  return str === revStr;
};

console.log(isPalindrome('madam') === true);               // true
console.log(isPalindrome('Madam') === false);               // false (case matters)
console.log(isPalindrome("madam i'm adam") === false);      // false (all characters matter)
console.log(isPalindrome('356653') === true);              // true
