const century = function century(year) {
  let century = String(Math.ceil(year/100));
  let lastCh = century[century.length - 1];
  let preLastCh = century[century.length - 2];

  if (lastCh === '1' && preLastCh !== '1') {
    century += 'st';
  } else if (lastCh === '2' && preLastCh !== '1') {
    century += 'nd';
  } else if (lastCh === '3' && preLastCh !== '1') {
    century += 'rd';
  } else {
    century += 'th';
  }

  return century;
};

console.log(century(2000) === "20th");        // "20th"
console.log(century(2001) === "21st");        // "21st"
console.log(century(1965) === "20th");        // "20th"
console.log(century(256) === "3rd");         // "3rd"
console.log(century(5) === "1st");           // "1st"
console.log(century(10103) === "102nd");       // "102nd"
console.log(century(1052) === "11th");        // "11th"
console.log(century(1127) === "12th");        // "12th"
console.log(century(11201) === "113th");       // "113th"
