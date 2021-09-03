import randomNumber from '../utils.js';
import runGame from '../game-engine.js';

const progressionLength = 10;

const rule = 'What number is missing in the progression?';

/* Функция, которая генерирует ряд чисел */
const getProgression = (start, step) => {
  let i = 0;
  const progression = [];
  while (i < progressionLength) {
    // eslint-disable-next-line no-param-reassign
    progression.push(start += step);
    i += 1;
  } return progression;
};

const getRaund = () => {
  const start = randomNumber(1, 100);
  const step = randomNumber(1, 100);
  const progression = getProgression(start, step);
  const dotsIndex = randomNumber(0, progressionLength - 1);
  const answer = String(progression[dotsIndex]);
  progression[dotsIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const playGame = () => {
  runGame(rule, getRaund);
};
export default playGame;
