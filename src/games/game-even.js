import game from '../game-engine.js';
import randomNumber from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const isEvenAnswer = (num) => {
  let result = '';
  if (isEven(num) === true) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

const raund = () => {
  const question = randomNumber(1, 10);
  const answer = String(isEvenAnswer(question));
  return [question, answer];
};

const playGame = () => {
  game(rule, raund);
};
export default playGame;
