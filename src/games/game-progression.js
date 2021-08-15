import randomNumber from '../utils.js';
import game from '../game-engine.js';

const progressionLength = 10;

const rule = 'What number is missing in the progression?';

/* Функция, которая генерирует ряд чисел */
const getProgression = (start, step) => {
  let i = 0;
  const progression = [];
  while (i < progressionLength - 1) {
    // eslint-disable-next-line no-param-reassign
    progression.push(start += step);
    i += 1;
  } return progression;
};

const raund = () => {
  const start = randomNumber(1, 10);
  const step = randomNumber(1, 10);
  const progression = getProgression(start, step);
  const dotsIndex = randomNumber(0, progressionLength - 1);
  const answer = String(progression[dotsIndex]);
  progression[dotsIndex] = '...';
  const question = progression.join(' ');
  return [question, answer];
};

const playGame = () => {
  game(rule, raund);
};
export default playGame;
