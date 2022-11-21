logValue();

function logValue() {
  console.log('Hello, world!');
}

// This code will log 'Hello, world!' to the console. despite function logValue
// being declared after we call it (line 1) what happens is hoisting of
// function definition and because of hoisting we can still access logValue function
// from the very top of the program

// Further exploration:
// var logValue = 'foo';
//
// function logValue() {
//   console.log('Hello, world!');
// }
//
// console.log(typeof logValue);
//
// this code will log 'string' to the console. again, because of hoisting and
// because hoisting has different effects on variables declared with var and
// function declarations. when function is hoisted, both the name and the body.
// but with variables - only name is hoisted and variable is initialized to
// 'undefined' (in case of keyword 'var')
// So the code snippet above is the same as code snippet below:
// var logValue;
// function logValue() {
//   console.log('Hello, world!');
// }
// logValue = 'foo'; // variable assignments are not hoisted
// console.log(typeof logValue);
