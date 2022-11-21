function timeOfDay(deltaMinutes) {
  const mockDate = new Date('21 Aug 1991 00:00:00 GMT');
  mockDate.setMinutes(deltaMinutes);

  let minutes = padWithZeroes(mockDate.getUTCMinutes(), 2);
  let hours = padWithZeroes(mockDate.getUTCHours(), 2);

  return `${hours}:${minutes}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"
