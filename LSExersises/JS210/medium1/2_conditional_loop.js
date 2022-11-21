let i = 0;
while (i < 10) {
  if (i % 3 === 0) { // no it will not because
    console.log(i);  // in this curly braces we are not changing i so we'll be stuck in the infinite loop (0 will be printed to the console indefinitely)
  } else {
    i += 1;
  }
}
