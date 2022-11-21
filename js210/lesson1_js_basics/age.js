let rlSync = require('readline-sync');
let user_age = Number(rlSync.question('How old are you? '));
console.log(`You are ${user_age} years old.`);

// console.log(`In 10 years, you will be ${user_age + 10} years old.`)
// console.log(`In 20 years, you will be ${user_age + 20} years old.`)
// console.log(`In 30 years, you will be ${user_age + 30} years old.`)
// console.log(`In 40 years, you will be ${user_age + 40} years old.`)


for (let i = 10; i <= 40; i += 10 ) {
  console.log(`In ${i} years, you will be ${user_age + i} years old.`)
}
