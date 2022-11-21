function foo() {
  let name = "Pete";
  return function() {
    console.log(name);
  };
}

let printPete = foo();
printPete(); // Pete
console.log(name);
