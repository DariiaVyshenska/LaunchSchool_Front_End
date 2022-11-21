const average = function average(arr) {
  return Math.round(arr.reduce((acc, el) => acc + (el / arr.length), 0));
};

console.log(average([1, 5, 87, 45, 8, 8]));       // 26 - since the task states rounding, not flooring.
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
