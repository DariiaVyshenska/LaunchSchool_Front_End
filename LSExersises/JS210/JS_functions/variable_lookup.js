var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// it will log 'This is global' because variable created in the outer scope
// are also awailiable in the inner function scope too due to closure
