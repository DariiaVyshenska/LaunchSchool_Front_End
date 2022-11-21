const stringy = function stringy(len) {
  let str = '';
  for (let i = 1; i <= len; ++i) {
    str += (i % 2 === 0 ? '0' : '1');
  }

  return str;
};

console.log(stringy(6) === "101010");    // "101010"
console.log(stringy(9) === "101010101");    // "101010101"
console.log(stringy(4) === "1010");    // "1010"
console.log(stringy(7) === "1010101");    // "1010101"
