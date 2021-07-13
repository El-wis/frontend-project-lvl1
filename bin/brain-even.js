import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved
import name from './.src./cli.js';

console.log('Answer "yes" if the number is even, otherwise answer "no"');
const randomNumber = Math.random(1, 10);
const question = `${'Question:'}${randomNumber}`;
const answer = readlineSync.question(question);
if (randomNumber % 2 === 0 && answer === 'yes') {
  console.log('Correct!');
}
if (randomNumber % 2 !== 0 && answer === 'no') {
  console.log('Correct!');
}
if (randomNumber % 2 === 0 && answer !== 'yes') {
  console.log(`${answer}${"is wrong answer ;(. Correct answer was 'yes'. Let's try again,"}${name}"}`);
}
if (randomNumber % 2 !== 0 && answer !== 'no') {
  console.log(`${answer}${"is wrong answer ;(. Correct answer was 'no'. Let's try again,"}${name}`);
}
