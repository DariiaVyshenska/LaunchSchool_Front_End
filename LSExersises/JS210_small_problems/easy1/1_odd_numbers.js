// for (let i = 1; i < 100; i += 2) {
//   console.log(i);
// }

// Further exploration:
function printOddNums(ceiling) {
  let num = 1;
  do {
    console.log(num);
    num += 2;
  } while (num <= ceiling)
}

printOddNums(30);
