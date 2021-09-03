import readlineSync from 'readline-sync';
import getName from './cli.js';

const runGame = (rule, getRaund) => {
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getRaund();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answer) {
      console.log(`Your answer: ${answer} '${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        Let's try again, ${userName}!`);
      return;
    } console.log('Correct');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
