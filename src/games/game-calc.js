import readlineSync from 'readline-sync';
import randomNumber from '../utils.js';
import { getName } from '../cli.js';

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

export const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3;) {
    const firstNumber = randomNumber(1, 10);
    const secondNumber = randomNumber(1, 10);
    const operator = randomOperator();
    const question = `${firstNumber} ${operator} ${secondNumber}`;
    console.log(question);
    const calculate = String(calc(firstNumber, secondNumber, operator));
    const answer = readlineSync.question('Your answer: ');
    console.log(answer);
    if (calculate === answer) {
      console.log('Correct');
      i += 1;
    } else {
      console.log(`Your answer: ${answer} '${answer}' is wrong answer ;(. Correct answer was '${calculate}'.
      Let's try again, ${name}!`);
      return;
    }
  } console.log(`Congratulations, ${name}!`);
};
/* Задать вопрос
   Получить ответ
   Сравнить ответ */
