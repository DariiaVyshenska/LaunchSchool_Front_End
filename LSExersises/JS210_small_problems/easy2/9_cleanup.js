const cleanUp = function cleanUp(str) {
  const regex = /[^a-z]+/ig
  return str.replace(regex, ' ');
};

console.log(cleanUp("---what's my +*& line?") === " what s my line ");    // " what s my line "
