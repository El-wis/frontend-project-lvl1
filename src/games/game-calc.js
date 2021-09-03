import runGame from '../game-engine.js';
import randomNumber from '../utils.js';

const rule = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

export const getRandomOperator = () => {
  const i = randomNumber(0, 2);
  return operators[i];
};

export const calc = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const getRaund = () => {
  const firstNumber = randomNumber(1, 10);
  const secondNumber = randomNumber(1, 10);
  const operator = getRandomOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = String(calc(firstNumber, secondNumber, operator));
  return [question, answer];
};

const playGame = () => {
  runGame(rule, getRaund);
};
export default playGame;
