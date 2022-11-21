const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);
// the result will be a coertion of function object to string
// because firstName is a property of person object, but this property holds
// a function. And because in the string concatination we are
// referencing the property, and not calling the function this property actually holds
// to get a true concatination of the name and sername we'd need to run
// the following :
console.log(`${person.firstName()} ${person.lastName()}`);
