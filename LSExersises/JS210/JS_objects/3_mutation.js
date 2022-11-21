const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2); // this will log same array as on line 1
// this happens because we are pushing a primitive value into array2 and
// not just making array2 variable to reference same Array object that
// array1 references.
// plus, on line 10 reassignment happens. as strings are primitive data types
// which means they can't be mutated.

let a = [{a: 1}];
let b = [];
b.push(a[0]);
console.log(a);
console.log(b);
console.log('---')
a[0].b = 2;
console.log(a); // both a and b will show the new property
console.log(b);
