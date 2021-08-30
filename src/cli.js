import readlineSync from 'readline-sync';

const getName = () => {
  const userName = readlineSync.question('May I have your name?');
  return userName;
};
export default getName;

export const greet = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getName();
  console.log(`Hello, ${userName}`);
};
