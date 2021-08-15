import randomNumber from '../utils.js';
import game from '../game-engine.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let result = '';
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      result = 'no';
    } else {
      result = 'yes';
    }
  } return result;
};

const raund = () => {
  const question = randomNumber(2, 20);
  const answer = String(isPrime(question));
  return [question, answer];
};

const playGame = () => {
  game(rule, raund);
};

export default playGame;
