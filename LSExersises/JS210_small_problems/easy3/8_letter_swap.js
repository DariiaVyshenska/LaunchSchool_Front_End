const swap = function swappingEachWordInText(text) {
  const swapWord = function swappingWord(word) {
    if (word.length === 1) return word;

    let lastIndex = word.length - 1;
    return word[lastIndex] + word.slice(1, lastIndex) + word[0];
  };

  return text.split(' ').map(el => swapWord(el)).join(' ');
};



console.log(swap('Oh what a wonderful day it is') === "hO thaw a londerfuw yad ti si");  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde') === "ebcdA");                          // "ebcdA"
console.log(swap('a') === 'a');                              // "a"
