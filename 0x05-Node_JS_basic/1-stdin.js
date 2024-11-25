/**
 * Program to get name from user in the standard input
 * and display the name to the user
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n')
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is ${chunk}`)
  }
});

process.stdin.on('readable', () => {
  process.stdout.write("Closing\n")
});
