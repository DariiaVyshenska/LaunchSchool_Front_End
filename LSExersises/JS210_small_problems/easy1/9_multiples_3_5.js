const validMultiplier = function validMultiplier(num) {
  return (num % 3 === 0) || (num % 5 === 0);
};

const multisum = function multisum(num) {
  let sum = 0;
  for(let i = 1; i <= num; ++i) {
    if (validMultiplier(i)) sum += i;
  }
  return sum;
};

console.log(multisum(3) === 3);       // 3
console.log(multisum(5) === 8);       // 8
console.log(multisum(10) === 33);      // 33
console.log(multisum(1000) === 234168);    // 234168
