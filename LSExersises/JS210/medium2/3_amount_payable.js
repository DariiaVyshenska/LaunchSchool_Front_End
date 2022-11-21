let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // 45

// we get different output because the function depends on the variable declared
// in the outer scope (startingBalance). so when we reassing startingBalance
// to a new value, we get different return value for the totalPayable function
// even though the arguments we pass to this function do not change.
// conclusion: totalPayable function is not a pure function.
// this example can be used to explain closures, although it's tricky
// because the closure happens at the global scope level.
