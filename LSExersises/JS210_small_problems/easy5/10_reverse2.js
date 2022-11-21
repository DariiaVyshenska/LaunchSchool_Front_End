const reverseIfLong = function reverseWordIfLongerThanFiveLetters(word) {
  if (word.length < 5) return word;

  return word.split('').reverse().join('');
};
const reverseWords = function reverseWords(sentence) {
  return sentence.split(' ').map((word) => reverseIfLong(word)).join(' ');
};

console.log(reverseWords('Professional') === "lanoisseforP");             // "lanoisseforP"
console.log(reverseWords('Walk around the block') === "Walk dnuora the kcolb");    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School') === "hcnuaL loohcS");            // "hcnuaL loohcS"
