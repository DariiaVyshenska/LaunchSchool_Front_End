const isLetter = function isLetter(char) {
  let regex = /[a-z]/g;

  return !!(char.toLowerCase().match(regex));
};

const cleanWord = function cleanWord(word) {
  let cleanWord = '';
  for (let idx = 0; idx < word.length; idx += 1) {
    if (isLetter(word[idx])) cleanWord += word[idx];
  }

  return cleanWord;
};

const wordSizes = function wordSizes(text) {
  let textArr = text.split(' ').map(el => cleanWord(el)).map(el => el.length);
  textArr = textArr.filter(el => el !== 0);
  let lengthCounts = {};
  for (let idx = 0; idx < textArr.length; idx += 1) {
    lengthCounts[textArr[idx]] = lengthCounts[textArr[idx]] || 0;
    lengthCounts[textArr[idx]] += 1;
  }

  return lengthCounts;
};


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
console.log(wordSizes('1'));                                            // {}
