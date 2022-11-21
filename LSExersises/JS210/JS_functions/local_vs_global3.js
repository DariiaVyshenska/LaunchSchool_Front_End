var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// This code will log 'This is local' to the console because myVar was declared and
// initialized to string 'This is global' at line 1 and then at line 4
// it was reassinged to a new string 'This is local' (after the function someFunction
// was called on line 7). The changes are of the global scope since it's not
// a new var declaration but reasignment of existing one
