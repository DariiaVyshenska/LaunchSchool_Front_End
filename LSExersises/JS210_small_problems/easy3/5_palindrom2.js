const isPalindrome = function isPalindrome(str) {
  let revStr = str.split('').reverse().join('');
  return str === revStr;
};

const isRealPalindrome = function isRealPalindrome(str) {
  let newStr = str.toLowerCase().split('');
  newStr = newStr.filter(el => el.match(/[a-z0-9]/g)).join('');

  return isPalindrome(newStr);
};

console.log(isRealPalindrome('madam') === true);               // true
console.log(isRealPalindrome('Madam') === true);               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam") === true);     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653') === true);              // true
console.log(isRealPalindrome('356a653') === true);             // true
console.log(isRealPalindrome('123ab321') === false);            // false
