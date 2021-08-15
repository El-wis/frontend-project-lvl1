import readlineSync from 'readline-sync';
import name from './cli.js';

const game = (rule, raund) => {
  console.log('Welcome to the Brain Games!');
  const userName = name();
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  for (let i = 0; i < 3;) {
    const [question, correctAnswer] = raund();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct');
      i += 1;
    } else {
      console.log(`Your answer: ${answer} '${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        Let's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};

export default game;
