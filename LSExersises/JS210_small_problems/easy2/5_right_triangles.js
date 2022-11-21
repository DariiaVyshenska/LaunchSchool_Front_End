const triangle = function triangle(len) {
  const paddedStr = function paddedStr(str, len) {
    return ' '.repeat(len - str.length) + str;
  };

  for (let starLen = 1; starLen <= len; ++starLen) {
    console.log(paddedStr('*'.repeat(starLen), len));
  }
};

triangle(5);
triangle(9);
