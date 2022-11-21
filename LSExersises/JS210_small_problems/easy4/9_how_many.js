const countElements = function countElements(arr) {
  let result = {};
  arr.forEach(function(el) {
    result[el] = result[el] || 0;
    result[el] += 1;
  });
  return result;
};
const logUniqVehicles = function logUniqVehicles(obj) {
  for (let key in obj) {
    console.log(`${key} => ${obj[key]}`);
  }
};
const countOccurrences = function countOccurrences(arr) {
  logUniqVehicles(countElements(arr));
};

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
