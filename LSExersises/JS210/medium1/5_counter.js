// var counter = 5;  // var reasignment
// var rate = 3;
// console.log('The total value is ' + String(counter * rate));
//
// function counter(count) {  // gets hoisted first
//   // ...
// }
//
// // logs to console: The total value is 15
//
// function counter(count) {
//   // ...
// }
//
// console.log('The total value is ' + String(counter * rate)); // here variable counter is referencing a function.
//                                                              // and rate is referencing undefined (due to hoisting)
// var counter = 5;
// var rate = 3;
//
// // logs to console: The total value is NaN
//
// var counter = 5; // existing counter variable will be reasigned to 5 instead of function.
// var rate = 3;
//
// function counter(count) { // function declaration with the body will be hoisted to the top
//   // ...
// }
//
// console.log('The total value is ' + String(counter * rate));
// // logs to console: The total value is 15
//
// let counter = 5; // declare variable during creation phase, but does not set it.
// let rate = 3;
//
// function counter(count) { // this line will produce en error indicating that variable counter has already been declared
//   // ...
// }
//
// console.log('The total value is ' + String(counter * rate));
