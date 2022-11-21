let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a); // will log 1, 2, 10

// because we pass the array as an argument to our function. and within
// function scope variable b references same array as variable a in the
// outer scope. then on line 4 we reassign one of the array's elements to a
// new value. this reasignment mutates the array that is referenced by
// both b and a variables. so in the outside scope we will have access
// to already mutated array.
