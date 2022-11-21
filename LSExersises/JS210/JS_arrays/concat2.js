const concat = function concat(...args) {
  let newArr = [];
  for (let idx = 0; idx < args.length; ++idx) {
    if (Array.isArray(args[idx])) {
      args[idx].forEach (el => newArr.push(el));
    } else { newArr.push(args[idx]);}
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
