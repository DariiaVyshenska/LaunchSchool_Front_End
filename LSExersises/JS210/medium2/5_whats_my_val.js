const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);  // 3 - the length of array is the largest positive
// integer index + 1. 3.4 will be coersed into string and Oranges will not be
// counted as arrays element (only as additional property with key '3.4')
// console.log(array);
console.log(Object.keys(array).length);  // 4  - however, Object.key function will extract all keys
// the positive integer keys and other enumeratable keys ass well. so the return
// array of keys will contain '3.4' key and will be of length 4

array[-2] = 'Watermelon';
console.log(array.length); // 3 - same here because Watermelon will have '-2' key as a string
console.log(Object.keys(array).length);  // 5  - same will happen here as on line 8, now with '-2' key
