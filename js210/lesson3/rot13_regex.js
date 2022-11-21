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

  const getStartPosition = function getStartPosition(char) {
    let result;
    if (char.match(/[A-Z]/)) {
      result = ASCII_START_NUMS['upper'];
    } else if (char.match(/a-z/)) {
      result = ASCII_START_NUMS['lower'];
    }
    return result;
  };

  const rotatedChar = function rotatedChar(asciiNum, startPosition) {
    let newAsciiNum = rotatedAsciiNum(asciiNum, startPosition);
    return String.fromCharCode(newAsciiNum);
  };

  let newStr = '';
  for (let idx = 0; idx < str.length; ++idx) {
    let startPosition = getStartPosition(str[idx]);
    if (startPosition) {
      newStr += rotatedChar(str[idx].charCodeAt(0), startPosition);
      continue;
    }

    newStr += str[idx];
  }
  return newStr;
};

rot13('Teachers open the door, but you must enter by yourself.');
rot13('z');
rot13('Z');
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// // logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
