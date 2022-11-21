const retirement = function retirement(){
  let age = parseInt(prompt(`What is your age? `), 10);
  let retireAge = parseInt(prompt(`At what age would you like to retire? `), 10);

  let currYear = new Date().getFullYear()
  let yearsToRetirement = retireAge - age;
  console.log(`It's ${currYear}. You will retire in ${currYear + yearsToRetirement}.`)
  console.log(`You have only ${yearsToRetirement} years of work to go!`)
}
