function penultimate(string) {
  // return string.split(' ')[-2]; there is no element with index '-2' and it is certainly not the second from the end index synthax for JS
  // return string.split(' ')[string.length - 1];

  let splitStr = string.split(' ')
  let preLastIdx = splitStr.length - 2;

  return splitStr[preLastIdx];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"
