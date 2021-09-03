import runGame from '../game-engine.js';
import randomNumber from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const getRaund = () => {
  const question = randomNumber(1, 20);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const playGame = () => {
  runGame(rule, getRaund);
};
export default playGame;
