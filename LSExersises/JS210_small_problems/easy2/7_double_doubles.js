const twice = function twice(num) {
  const isDouble = function isDouble(x) {
    let digitStr = String(x);
    if (digitStr.length % 2 !== 0) return false;

    let middleIdx = digitStr.length / 2;
    return digitStr.slice(0, middleIdx) === digitStr.slice(middleIdx);
  };

  return (isDouble(num) ? num : num * 2);
};

console.log(twice(37) === 74);          // 74
console.log(twice(44) === 44);          // 44
console.log(twice(334433) === 668866);      // 668866
console.log(twice(444) === 888);         // 888
console.log(twice(107) === 214);         // 214
console.log(twice(103103) === 103103);      // 103103
console.log(twice(3333) === 3333);        // 3333
console.log(twice(7676) === 7676);        // 7676
