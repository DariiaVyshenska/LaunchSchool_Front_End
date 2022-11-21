const swapName = function swapName(userName) {
  // return userName.split(' ').reverse().join(', ');

  // further exploration:
  let nameArr = userName.split(' ');
  let firstName = nameArr.slice(0, 1)[0];
  let secondName = nameArr.slice(1).join(' ');
  return `${secondName}, ${firstName}`;
};

console.log(swapName('Joe Roberts') === "Roberts, Joe");    // "Roberts, Joe"
console.log(swapName('Monica Bel Kaa') === 'Bel Kaa, Monica');
