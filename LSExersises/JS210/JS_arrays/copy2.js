// // option one
// let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray.slice();
//
// myArray.pop();
// console.log(myOtherArray);
//
// myArray = [1, 2];
// console.log(myOtherArray);


// option two
let myArray = [1, 2, 3, 4];
const myOtherArray = [];
myArray.forEach(el => myOtherArray.push(el));

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);
