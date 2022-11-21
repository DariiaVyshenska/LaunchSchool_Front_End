const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');   // this line will run since myBoolean evaluates to true
}

if (!myString) {
  console.log('World');  // will not run since myString evaluates to true and ! negates it to false
}

if (!!myArray) {
  console.log('World');  // myArray will evaluate to true and double negation will result in the whole expression to evaluate to true
  // so the 'World' string will be printed to the console
}

if (myOtherString || myArray) {
  console.log('!');  // since myOtherString evaluate to false, but myArray evaluates to true
  // the OR expression will evaluate to true (the return value will be empty string that evaluates to true)
  // '!' will be printed to the console
}

// Console output will be:
// Hello
// World
// !
