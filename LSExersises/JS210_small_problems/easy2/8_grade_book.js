const getGrade = function getGrade(...grades) {
  let ave = grades.reduce ((acc, el) => acc + el / grades.length, 0);

  if (ave < 0 || ave > 100) return;

  let mark;
  if (ave < 60) {
    mark = 'F';
  } else if (ave < 70) {
    mark = 'D';
  } else if (ave < 80) {
    mark = 'C';
  } else if (ave < 90) {
    mark = 'B';
  } else if (ave <= 100) {
    mark = 'A';
  }

  return mark;
};

console.log(getGrade(95, 90, 93) === 'A');    // "A"
console.log(getGrade(50, 50, 95) === 'D');    // "D"
console.log(getGrade(-1, -50, -95) === undefined);    // undefined
