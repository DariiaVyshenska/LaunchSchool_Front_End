const repeater = function repeater(text) {
  return text.split('').map((el) => `${el}${el}`).join('');
};

console.log(repeater('Hello') === "HHeelllloo");        // "HHeelllloo"
console.log(repeater('Good job!') === "GGoooodd  jjoobb!!");    // "GGoooodd  jjoobb!!"
console.log(repeater('') === '');             // ""
