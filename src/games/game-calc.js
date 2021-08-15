import game from '../game-engine.js';
import randomNumber from '../utils.js';

const rule = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

export const randomOperator = () => {
  const i = randomNumber(0, 2);
  return operators[i];
};

export const calc = (a, b, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
  }
  return result;
};

const raund = () => {
  const firstNumber = randomNumber(1, 10);
  const secondNumber = randomNumber(1, 10);
  const operator = randomOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = String(calc(firstNumber, secondNumber, operator));
  return [question, answer];
};

const playGame = () => {
  game(rule, raund);
};
export default playGame;
