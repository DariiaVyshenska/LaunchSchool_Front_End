let rlSync = require('readline-sync');
let noun = rlSync.question('Enter a noun: ');
let verb = rlSync.question('Enter a verb: ');
let adjective = rlSync.question('Enter an adjective: ');
let adverb = rlSync.question('Enter a adverb: ');

let msg = `Do you ${verb} your ${adjective} ${noun} ${adjective}? That's hilarious!`
console.log(msg);
