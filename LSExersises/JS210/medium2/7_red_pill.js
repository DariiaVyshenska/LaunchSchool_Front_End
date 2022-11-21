function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101)); // Welcome
    anotherOne(116, 111); // to
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101); // the
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);  // Matrix!

// first we call one() with no arguments.
// then line 20 is invoked and leads to execution of the code on line 16 - > 'Welcome' output to console
// then on line 17 we call anotherOne function with arguments.
// this leads to execution of code on lines 7-12 (and execution of line 3 when log() is invoced) and
// printing to the console 'to'
// then we move to exectuion of line 21 where we again invoke anotherOne()  function with another
// set of parameters. this leads to printing to console 'the'
// then line 22 is executed where function anotherOne is returned as a return value
// of our call of one() function on line 25
// since the return value of one() is another function we can call it
// by adding parenthesis and arguments after one() and calling the returned function (which is anotheOne)
// this results in new invocation of anotherOne() function and printing to the
// console 'Matrix!'
//
// console will show:
// Welcome
// to
// the
// Matrix!
