function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// the console will output 'This is global'.
// inside the function scope js is looking for variable myVar but does not
// find it, it then looks for variable with this name in the outer (here - global)
// scope, but still can't find it. if this happens, then js binds myVar  to be a
// property of the global object, assignes it 'undefined' value and then
// reassigns on line 2 to point to 'This is global' string
