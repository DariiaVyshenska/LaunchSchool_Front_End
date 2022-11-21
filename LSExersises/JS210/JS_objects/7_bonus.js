function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0; // terniary operator
    // plus we use arguments object that holds all the arguments passed into the function
}

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000
