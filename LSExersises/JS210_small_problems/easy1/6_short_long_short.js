const shortLongShort = function shortLongShort(strA, strB) {
  if (strA.length > strB.length) [strA, strB] = [strB, strA];
  return strA + strB + strA;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
