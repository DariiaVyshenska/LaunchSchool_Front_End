const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', <1 empty item>]
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['JavaScript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript', <2 empty items>]
console.log(languages.length); 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // ['JavaScript', <1 empty item>, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3

// the whole output relied on the fact that length is a property that
// can be manually changed. if there is an existing array and it's length
// is set to a larger value than it was, then the unexisting elements will
// be 'undefined' (btw, the keys will stay of the same length, no new
// keys for undefined non existent elements will be created)

// then when the length is reassigned to a smaller value than it was
// the array 'loses' the elements with keys larger than new length - 1.
// these lost elements will NOT be recovered if length is reassigned back
// to the previous value. they are lost forever.
