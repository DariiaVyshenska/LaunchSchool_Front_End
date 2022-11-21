// const person = { name: 'Victor' };
// const otherPerson = { name: 'Victor' };
//
// console.log(person === otherPerson);    // false -- expected: true
// // the code outputs false because strict equality operator returns true
// // for comparison of two objects only in case when we compare two same
// // objects (to be precise - the variables on both sides onf the operator
// // reference exactly the same object).
//
// // refactoring. one way. we can also write more specialized function for
// // comparing two objects and taking into account every property of the object
// // we are most interested in.
// const person = { name: 'Victor' };
// const otherPerson = { name: 'Victor' };
//
// console.log(JSON.stringify(person) === JSON.stringify(otherPerson));

// or we can simply make both variables refer to the same object
const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson); 
