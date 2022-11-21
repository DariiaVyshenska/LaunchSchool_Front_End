// const M_TO_FEET_CONST = 10.7639;
// let rlSync = require('readline-sync');
// let len = parseInt(rlSync.question('Enter the length of the room in meters:\n'), 10);
// let wid = parseInt(rlSync.question('Enter the width of the room in meters:\n'), 10);
//
// let areaM = len * wid;
// let areaFeet = areaM * M_TO_FEET_CONST;
// let msg;
// msg = `The area of the room is ${areaM.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`
// console.log(msg);


// Further exploration
const M_TO_FEET_CONST = 10.7639;
let rlSync = require('readline-sync');
let type = rlSync.question('Please, enter preferred measurement (meters or feet):\n');
let len = parseInt(rlSync.question('Enter the length of the room in meters:\n'), 10);
let wid = parseInt(rlSync.question('Enter the width of the room in meters:\n'), 10);

let areaM = len * wid;
let areaFeet = areaM * M_TO_FEET_CONST;

let msg;
if (type === 'meters') {
  msg = `The area of the room is ${areaM.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`
} else if (type === 'feet') {
  msg = `The area of the room is ${areaFeet.toFixed(2)} square feet (${areaM.toFixed(2)} square meters).`
} else { msg = 'This measurement is not supported. Exiting program.'}

console.log(msg);
