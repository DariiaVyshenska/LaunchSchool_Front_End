const unionUniq = function unionUniq (arr1, arr2) {
  arr2.forEach (function (el) {
    if (!arr1.includes(el)) arr1.push(el)
  })
};

const union = function union(arr1, arr2) {
  let unionArr = [];
  unionUniq(unionArr, arr1);
  unionUniq(unionArr, arr2);
  return unionArr;
};

console.log(union([1, 3, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
