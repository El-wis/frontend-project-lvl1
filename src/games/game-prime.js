import randomNumber from '../utils.js';
import runGame from '../game-engine.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRaund = () => {
  const question = randomNumber(2, 20);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const playGame = () => {
  runGame(rule, getRaund);
};

export default playGame;
