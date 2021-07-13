import readlineSync from 'readline-sync';

export const welcomToGame = () => {
  console.log('Welcome to the Brain Games!');
};
export const name = readlineSync.question('May I have your name?');
export const greeting = () => {
  console.log(`Hello, ${name}!`);
};
