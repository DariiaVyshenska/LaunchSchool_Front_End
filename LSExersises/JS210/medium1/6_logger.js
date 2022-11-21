function debugIt() {
  const status = 'debugging'; // block scoped variable. block scope coinsides with function scope
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt(); // function call. function is already declared and initialized

// we call debugIt function (successfully) on line 10
// debugIt function calles logger function that was declared and initialized inside of
// functin scope on lines 3-5. logger logs to the console the value which variable
// status references. since variable status was declared with keyword const and
// initialized to 'debugging' string on line 2 before function logger declaration,
// therefore we see string 'debugging' output to the console.
