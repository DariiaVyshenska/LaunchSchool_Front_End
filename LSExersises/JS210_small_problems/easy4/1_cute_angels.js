const padChar = function padSingleCharWithZero(strNum) {
  if (strNum.length > 1) return strNum;

  return `0${strNum}`;
};

const numToStr = function parseValToPaddedStr(num, measurment) {
  return `${padChar(num.toString())}${measurment}`;
};

const dms = function dms(angle) {
  const DERGEE_CHAR = String.fromCharCode(186);
  const MIN_CHAR = "'";
  const SEC_CHAR = '"';
  const MIN_IN_DEG = 60;
  const SEC_IN_DEG = MIN_IN_DEG * 60;

  let degrees = Math.floor(angle);
  let min = Math.floor((angle - degrees) * MIN_IN_DEG);
  let sec = Math.floor((angle - (degrees + (min / MIN_IN_DEG))) * SEC_IN_DEG);

  return `${numToStr(degrees, DERGEE_CHAR)}${numToStr(min, MIN_CHAR)}${numToStr(sec, SEC_CHAR)}`;
};

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
