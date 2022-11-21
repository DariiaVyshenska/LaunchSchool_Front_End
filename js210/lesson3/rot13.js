const rot13 = function rot13(str) {
  const ROTATION_VAL = 13;
  const ASCII_START_NUMS = { upper: 65, lower: 97 };
  const ALPHABET_LEN = 26;

  const rot = function rot(pos) {
    return (pos + ROTATION_VAL) % ALPHABET_LEN;
  };

  const rotatedAsciiNum = function rotatedAsciiNum(pos, asciiStartNum) {
    let alphabet_curr_num = (pos - asciiStartNum);
    return rot(alphabet_curr_num) + asciiStartNum;
  };

  const charType = function charType(charAsciiNum) {
    let type;
    Object.keys(ASCII_START_NUMS).forEach(function(key) {
      if (charAsciiNum >= ASCII_START_NUMS[key] &&
          charAsciiNum < (ASCII_START_NUMS[key] + ALPHABET_LEN)) {
        type = key;
      }
    });
    return type;
  };

  const rotatedChar = function rotatedChar(asciiNum, currCharType) {
    let newAsciiNum = rotatedAsciiNum(asciiNum, ASCII_START_NUMS[currCharType]);
    return String.fromCharCode(newAsciiNum);
  };

  let newStr = '';
  for (let idx = 0; idx < str.length; ++idx) {
    let asciiNum = str[idx].charCodeAt(0);
    let currCharType = charType(asciiNum);
    if (currCharType) {
      newStr += rotatedChar(asciiNum, currCharType);
      continue;
    }
    newStr += str[idx];
  }
  console.log(newStr);
  return newStr;
};

rot13('Teachers open the door, but you must enter by yourself.');
rot13('z');
rot13('Z');
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// // logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
