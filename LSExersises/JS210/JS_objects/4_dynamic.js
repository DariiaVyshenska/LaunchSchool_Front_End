const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);  // 678 because we are actually logging in the value of '456' key
console.log(myObject.prop2);  // 456 because here we are logging in the value of 'prop2' keys

// const myObj = {};
// myObj[myFunc()] = 'hello, ';
//
// function myFunc() {
//   return 'funcProp';
// }
//
// console.log(myObj);
// myObj[myFunc()] = 'world!';
// console.log(myObj);
