import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved
import randomNumber from '../utils.js';

export const getName = () => readlineSync.question('May I have your name?');

const isNumberEven = (num) => num % 2 === 0;

export const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3;) {
    const number = randomNumber(1, 10);
    console.log(number);
    const answer = readlineSync.question('Your answer: ');
    if (((isNumberEven(number) === true) && answer === 'yes') || ((isNumberEven(number) === false) && answer === 'no')) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${answer} is wrong answer ;(. Correct answer was 'no'.Let's try again, ${name}!"`);
      return;
    }
  } console.log(`Congratulations, ${name}!`);
};
