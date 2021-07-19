import readlineSync from 'readline-sync';

export const name = () => {
  const getName = readlineSync.question('May I have your name?');
  return getName;
};

const welcomToGame = () => {
  console.log('Welcome to the Brain Games!');
  const askName = name();
  console.log(`Hello, ${askName}!`);
};

export default welcomToGame;
