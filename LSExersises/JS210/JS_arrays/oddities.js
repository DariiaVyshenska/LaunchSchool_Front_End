// the result shows that the output array  of function oddities is not
// strictly equal to the array on the right side of the operator. This happens
// because comparing two arrays in JavaScritp is somewhat complicated. the strict
// equality operator will return `true` only if two arrays are in fact the
// same array. in other words, only if variables on both sides of the operator
// reference the same memory cell with the same array. otherwise, the output
// of the comparison is always false, even if the length of the array, the elements
// and their order are same between two arrays being compared.
