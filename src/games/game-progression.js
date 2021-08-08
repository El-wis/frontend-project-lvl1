import readlineSync from 'readline-sync';
import randomNumber from '../utils.js';
import { getName } from '../cli.js';

const progressionLength = 10;

/* Функция, которая генерирует ряд чисел */
export const getProgression = (start, step) => {
  let i = 0;
  const progression = [];
  while (i < progressionLength - 1) {
    // eslint-disable-next-line no-param-reassign
    progression.push(start += step);
    i += 1;
  } return progression;
};

export const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3;) {
    const start = randomNumber(1, 10);
    const step = randomNumber(1, 10);
    const progression = getProgression(start, step);
    const dotsIndex = randomNumber(0, progressionLength - 1);
    const rightAnswer = String(progression[dotsIndex]);
    progression[dotsIndex] = '...';
    const question = progression.join(' ');
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
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
