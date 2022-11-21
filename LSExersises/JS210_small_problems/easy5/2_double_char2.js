const isLetter = function isLetter(char) {
  return !!(char.toLowerCase().match(/[a-z]/g));
};
const isVowel = function isVowel(char) {
  return !!(char.toLowerCase().match(/[aeiou]/g));
};
const doubleConsonants = function doubleConsonants(text) {
  let result = text.split('')
    .map((char) => {
      if (isLetter(char) && !isVowel(char)) {
        return `${char}${char}`;
      } else { return char }
    })
    .join('');

  return result;
};

console.log(doubleConsonants('String') === "SSttrrinngg");          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");        // "JJullyy 4tthh"
console.log(doubleConsonants('') === '');                // ""
