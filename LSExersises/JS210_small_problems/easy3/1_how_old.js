const generateAge = function generateAge(min, max) {
  if (max < min) [min, max] = [max, min]
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(`Teddy is ${generateAge(200, 20)} years old!`);
