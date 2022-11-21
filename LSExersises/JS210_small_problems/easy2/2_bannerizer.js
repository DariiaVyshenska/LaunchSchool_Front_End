// const logInBox = function logInBox(str) {
//   let strLen = str.length + 2;
//
//   let border = `+${'-'.repeat(strLen)}+`;
//   let middle = `|${' '.repeat(strLen)}|`;
//   let strMiddle = `| ${str} |`
//
//   console.log(border);
//   console.log(middle);
//   console.log(strMiddle);
//   console.log(middle);
//   console.log(border);
// }
//
// logInBox('To boldly go where no one has gone before.');
// logInBox('');

// // Further exploration 1
// const logInBox = function logInBox(str, width) {
//   let strLen;
//   let strMiddle;
//
//   if (width) {
//     if (width < 4) width = 4;
//
//     strLen = width - 2;
//     let newStr = str.slice(0, width - 4);
//     strMiddle = `| ${newStr} |`
//   } else {
//     strLen = str.length + 2;
//     strMiddle = `| ${str} |`
//   }
//
//   let border = `+${'-'.repeat(strLen)}+`;
//   let middle = `|${' '.repeat(strLen)}|`;
//
//   console.log(border);
//   console.log(middle);
//   console.log(strMiddle);
//   console.log(middle);
//   console.log(border);
// }
//
// logInBox('To boldly go where no one has gone before.', 1) ;
// logInBox('To boldly go where no one has gone before.', 16) ;
// logInBox('To boldly go where no one has gone before.') ;

// Further exploration 2
const logInBox = function logInBox(str, width) {
  const splitStr = function splitStr(str, len) {
    let strArr = [];
    if(len === 0) return strArr;

    for (let idx = 0; idx < str.length; idx += len) {
      strArr.push(str.slice(idx, idx + len));
    }

    if (strArr[strArr.length - 1].length < len) {
      strArr[strArr.length - 1] = paddedStr(strArr[strArr.length - 1], len);
    }

    return strArr;
  };

  const paddedStr = function paddedStr(str, len) {
    return str += ' '.repeat(len - str.length);
  }

  const stileRowEls = function stileRowEls(arr, startPad, endPad) {
    let newArr = [];
    arr.forEach(el => newArr.push(startPad + el + endPad));
    return newArr;
  };

  const getMiddleStrs = function getMiddleStrs(str, width) {
    let strsMiddle = width ? splitStr(str, width - 4) : [str];
    return stileRowEls(strsMiddle, '| ', ' |');
  }

  const generateRows = function generateRows(str, width) {
  if (width < 4) width = 4;

  let rows = [];
  let border = `+${'-'.repeat(width - 2)}+`;
  let middle = `|${' '.repeat(width - 2)}|`;
  let strsMiddle = getMiddleStrs(str, width);

  rows.push(border);
  rows.push(middle);
  strsMiddle.forEach(row => rows.push(row));
  rows.push(middle);
  rows.push(border);

  return rows;
  }

  generateRows(str, width).forEach(row => console.log(row));
}

logInBox('aaaaaaaa');
logInBox('aaaaaaaa', 1);
logInBox('aaaaaaaa', 4);
logInBox('aaaaaaaa', 5);
logInBox('aaaaaaaa', 7);
logInBox('aaaaaaaa', 9);
