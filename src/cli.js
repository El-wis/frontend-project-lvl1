import readlineSync from 'readline-sync';

const name = () => {
  const userName = readlineSync.question('May I have your name?');
  return userName;
};
export default name;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = name();
  console.log(`Hello, ${userName}`);
};
