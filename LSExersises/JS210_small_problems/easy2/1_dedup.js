const crunch = function crunch(str) {
  let newStr = '';
  str.split('').forEach(ch => {
    if(ch !== newStr[newStr.length - 1]) newStr += ch;
  });
  return newStr;
};

console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");    // "daily double"
console.log(crunch('4444abcabccba') === "4abcabcba");              // "4abcabcba"
console.log(crunch('ggggggggggggggg') === "g");            // "g"
console.log(crunch('a') === 'a');                          // "a"
console.log(crunch('') === '');                           // ""
