// both inplementations of the function take advantage of falsyness of undefined value.
// however, not only 'undefined'value is falsy, in fact, zero and empty string are
// also falsy values. Zero value seems to be the most relevant bug producing phenomena:
// for example, if we set quantity to zero, variable quantity will return false
// when tested for truthiness and will be reassigned to 1 which will produce an
// unexpected behavior.
