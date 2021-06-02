const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your favorite LOTR character', (answer) => {
  console.log('answer')

  rl.question('what is your name', (test) => {
    console.log(`Your name is ${test} and your fav LOTR character is ${answer}`)
  rl.close()
  });
});

