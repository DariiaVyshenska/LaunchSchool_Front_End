const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

// This code will output 'Bob Bob' because in JS strings are primitive values and
// therefore can't be mutated. so the function toUpperCase() will not change
// value assigned to constant name.
// it can be misleading that we operate on constants here, however, the same
// result would be even if we used local variables instead of constants.
