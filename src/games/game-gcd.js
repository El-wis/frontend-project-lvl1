import randomNumber from '../utils.js';
import game from '../game-engine.js';

const rule = 'Find the greatest common divisor of given numbers.';

const greatestDevider = (a, b) => {
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

const raund = () => {
  const firstNumber = randomNumber(1, 10);
  const secondNumber = randomNumber(1, 10);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(greatestDevider(firstNumber, secondNumber));
  return [question, answer];
};

const playGame = () => {
  game(rule, raund);
};
export default playGame;
