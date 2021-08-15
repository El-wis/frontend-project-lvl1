import readlineSync from 'readline-sync';
import randomNumber from '../utils.js';
import { name } from '../cli.js';

export const greatestDevider = (a, b) => {
  let firstNumber = a;
  let secondNumber = b;
  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  } return firstNumber + secondNumber;
};

export const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3;) {
    const firstNumber = randomNumber(1, 10);
    const secondNumber = randomNumber(1, 10);
    const question = `${firstNumber} ${secondNumber}`;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    console.log(answer);
    const rightAnswer = String(greatestDevider(firstNumber, secondNumber));
    if (answer === rightAnswer) {
      console.log('Correct');
      i += 1;
    } else {
      console.log(`Your answer: ${answer} '${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
            Let's try again, ${name}!`);
      return;
    }
  } console.log(`Congratulations, ${name}!`);
};
