let rlSync = require('readline-sync');
let phrase = rlSync.question('Please enter a phrase: ');
letters = phrase.replace(/[^a-zA-Z]/g, '');
console.log(`There are ${letters.length} characters in "${phrase}".`)
