const centerOf = function centerOf(text) {
  let textLength = text.length;
  let startIdx = textLength / 2;
  let endIdx = startIdx + 1;
  if (textLength % 2 === 0) startIdx -= 1;
  return text.substring(startIdx, endIdx);
};

console.log(centerOf('I Love JavaScript') === 'a'); // "a"
console.log(centerOf('Launch School') === ' ');     // " "
console.log(centerOf('Launch') === 'un');            // "un"
console.log(centerOf('Launchschool') === 'hs');      // "hs"
console.log(centerOf('x') === 'x');                 // "x"
