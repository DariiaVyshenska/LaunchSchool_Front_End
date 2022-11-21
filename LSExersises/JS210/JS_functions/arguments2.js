let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// still the colsole will output 7. because on like 3 we declare new, now local to 
// the function scope variable with the same name as global variable (shadowing).
// on line 4 we reassign function local variable a to 17. this variable is
// not accessible in the global scope, so when the function stops running and
// function scope is destroyed, in the global scope we now have access to the 'a'
// variable declared on line 1 and initialized to primitive vale 7 (same line 1)
