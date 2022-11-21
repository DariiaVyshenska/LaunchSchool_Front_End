// // 1.
// const objectHasProperty = function objectHasProperty(obj, str) {
//   return Object.keys(obj).includes(str);
// }
//
// let pets = {
//   cat: 'Simon',
//   dog: 'Dwarf',
//   mice: null,
// };
//
// console.log(objectHasProperty(pets, 'dog') === true);       // true
// console.log(objectHasProperty(pets, 'lizard') === false);    // false
// console.log(objectHasProperty(pets, 'mice') === true);      // true

// // 2.
// const incrementProperty = function incrementProperty(obj, prop) {
//   if (obj[prop]) {
//     obj[prop] += 1;
//   } else {
//     obj[prop] = 1;
//   }
//
//   return obj[prop];
// };
//
// let wins = {
//   steve: 3,
//   susie: 4,
// };
//
// console.log(incrementProperty(wins, 'susie') === 5);   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// console.log(incrementProperty(wins, 'lucy') === 1);    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

// // 3.
// const copyProperties = function copyProperties(obj1, obj2) {
//   let properties = Object.entries(obj1);
//   properties.forEach( el => obj2[el[0]] = el[1]);
//   return properties.length;
// };
//
// let hal = {
//   model: 9000,
//   enabled: true,
// };
//
// let sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }

// // 4.
// const wordCount = function wordCount(str) {
//   let result = {};
//   str.split(' ').forEach( el => {
//     if (result[el]) {
//       result[el] += 1;
//     } else {result[el] = 1}
//   });
//
//   return result;
// };
//
// console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }

// // Functions, practice:
// // 1.
// const bar = 42;
// let qux = [1, 2, 3];
// let baz = 3;
//
// function foo(arr) {
//   let value = arr.pop();  // array mutation
//   console.log(`popped ${value} from the array`); // writing to the console
//   return value + bar + baz;
// }
//
// foo(qux);

// 2.
// functions #: 2, 3, 5

// // Math object, practice:
// // 1.
// const radToDegrees = function radToDegrees(rad) {
//   return (180 / Math.PI) * rad;
// }
//
// console.log(radToDegrees(180));
//
// // 2.
// let val = -180;
// console.log(val);
// console.log(Math.abs(val));
//
// // 3.
// console.log(Math.sqrt(16777216));
//
// // 4.
// console.log(Math.pow(16, 6));
//
// // 5.
// let a = 50.72;
// let b = 49.2;
// let c = 49.86;
// console.log(Math.floor(a));
// console.log(Math.ceil(b));
// console.log(Math.round(c));
//
// // 6.
// const randNum = function randNum(min, max) {
//   if (min === max) {
//     return min;
//   } else if (max < min) { [min, max] = [max, min] }
//
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// console.log(randNum(3, 12));
// console.log(randNum(0, 1));
// console.log(randNum(11, 19));

// // Date object, practice:
// // 1.
// let today = new Date();
// console.log(today);
//
// // 2.
// let today = new Date();
// let weekDay = today.getDay();
// // console.log(`Today's day is ${weekDay}`);
//
// // 3.
// let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// console.log(`Today's day is ${daysOfWeek[weekDay]}`);
//
// 4.
// let monthDay = today.getDate();
// console.log(`Today's day is ${daysOfWeek[weekDay]}, the ${monthDay}`);

// // 5.
// const dateSuffix = function dateSuffix(num) {
//   let numStr = String(num);
//   let lastDigit = numStr[numStr.length - 1];
//   let twoLastDigits = numStr[numStr.length - 2] + lastDigit;
//
//   if (lastDigit === '1' && !(twoLastDigits === '11')) {
//     return 'st';
//   } else if (lastDigit === '2' && !(twoLastDigits === '12')) {
//     return 'nd';
//   } else if (lastDigit === '3' && !(twoLastDigits === '13')) {
//     return 'rd';
//   } else { return 'th' }
// };
// console.log(`Today's day is ${daysOfWeek[weekDay]}, the ${monthDay}${dateSuffix(monthDay)}.`);

// // 6. & 7.
// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// let monthNum = today.getMonth();
// console.log(`Today's day is ${daysOfWeek[weekDay]}, the ${months[monthNum]} ${monthDay}${dateSuffix(monthDay)}.`);
//
// // 8.
// const formattedMonth = function formattedMonth(monthNum) {
//   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   return `the ${months[monthNum]}`
// };
// const formattedDay = function formattedDay(monthDay) {
//   const dateSuffix = function dateSuffix(num) {
//     let numStr = String(num);
//     let lastDigit = numStr[numStr.length - 1];
//     let twoLastDigits = numStr[numStr.length - 2] + lastDigit;
//
//     if (lastDigit === '1' && !(twoLastDigits === '11')) {
//       return 'st';
//     } else if (lastDigit === '2' && !(twoLastDigits === '12')) {
//       return 'nd';
//     } else if (lastDigit === '3' && !(twoLastDigits === '13')) {
//       return 'rd';
//     } else { return 'th' }
//   };
//
//   return `${monthDay}${dateSuffix(monthDay)}`;
// };
// const formattedDate = function formattedDate(date) {
//   const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   let weekDay = daysOfWeek[date.getDay()];
//   let monthNum = formattedMonth(date.getMonth());
//   let monthDay = formattedDay(date.getDate());
//   let msg = `Today's day is ${weekDay}, ${monthNum} ${monthDay}.`;
//
//   console.log(msg);
// }
//
// formattedDate(new Date());
//
// // 9.
// let today = new Date();
// console.log(today);
// console.log(today.getFullYear());
// console.log(today.getYear());
//
// // 10.
// let today = new Date();
// console.log(today.getTime());
//
// // 11.
// let tomorrow = new Date(new Date().getTime());
// console.log(tomorrow);
// tomorrow.setDate(tomorrow.getDate() + 1);
// console.log(tomorrow);
//
// // 12.
// let today = new Date();
// let nextWeek = new Date(today.getTime());
// console.log(today === nextWeek);
// console.log(today);
// console.log(nextWeek);
//
// // 13.
// let todayStr = today.toDateString();
// let nextWeekStr = nextWeek.toDateString();
// console.log(todayStr === nextWeekStr);
// console.log(todayStr);
// console.log(nextWeekStr);
// nextWeek.setDate(nextWeek.getDate() + 7);
// nextWeekStr = nextWeek.toDateString();
// console.log(todayStr === nextWeekStr);
// console.log(todayStr);
// console.log(nextWeekStr);
//
// // 14.
// let today = new Date();
// const formatTime = function formatTime(date) {
//   const formatNum = function formatNum(num) {
//     return String(num).length < 2 ? `0${num}` : `${num}`;
//   }
//
//   let hours = date.getHours();
//   let min = date.getMinutes();
//   return `${formatNum(hours)}:${formatNum(min)}`;
// };
//
// console.log(formatTime(today));
// console.log(formatTime(new Date(2013, 2, 1, 1, 10)));
//
// // functions, practice:
// const greetings = function greetings(nameArr, objOcc) {
//   let fullName = nameArr.join(' ');
//   let occupation = `${objOcc['title']} ${objOcc['occupation']}`
//   let msg = `Hello, ${fullName}! Nice to have a ${occupation} around.`
//   console.log(msg);
// };
//
// greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// another practice problem
const repeatedCharacters = function repeatedCharacters(str) {
  str = str.toLowerCase();
  let count = {};
  for (let i = 0; i < str.length; ++i) {
    if (count[str[i]]) {
      count[str[i]] += 1;
    } else {
      count[str[i]] = 1;
    }
  }

  for (let key in count) {
    if (count[key] < 2) delete count[key];
  }

  return count;
};

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
