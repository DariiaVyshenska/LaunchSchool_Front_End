let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// value 7 will be logged to the console.
// This happens because on line 3 we declare a function parameter with var name 'b'
// so when we call myValue function on line 7 and passing another variable ('a')
// as an argument, what happens first is that in the function scope new local variable
// with name 'b' is declared and assigned the same value as global variable 'a'
// references. then on line 4 variable b is reassigned to 17 because
// numbers are primitive values and they are immutable. This means that a still
// references value 7 when b inside of the function scope references 17.
