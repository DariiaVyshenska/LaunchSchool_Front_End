const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const MLSEC_IN_MIN = 60000;

function afterMidnight(timeStr) {
  let zeroHour = new Date('21 Aug 1991 00:00:00 GMT');
  let actualHour = new Date(`21 Aug 1991 ${timeStr}:00 GMT`);

  return (actualHour - zeroHour) / MLSEC_IN_MIN;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

console.log(afterMidnight('00:00') === 0);       // 0
console.log(beforeMidnight('00:00') === 0);      // 0
console.log(afterMidnight('12:34') === 754);       // 754
console.log(beforeMidnight('12:34') === 686);      // 686
