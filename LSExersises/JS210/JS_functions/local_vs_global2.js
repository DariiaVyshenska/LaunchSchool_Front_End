var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// This code will log to the console 'This is local'
// because we are logging to the console the value referenced by myVar from
// within the local scope of the function. The valiable myVar in the
// inner (function) scope is declared and initialized to 'This is local' string
// on line 4 and shadows the globally scoped myVar that was declared on line 1 and
// initialized to 'This is global' string.
