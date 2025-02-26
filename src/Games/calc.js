import { getRandomNumber } from '../math.js';
import game from '../index.js';

const rules = 'What is the result of the expression?';

const calc = (firstNumber, secondNumber, randomOperator) => {
  if (randomOperator === '+') {
    return firstNumber + secondNumber;
  } if (randomOperator === '-') {
    return firstNumber - secondNumber;
  } if (randomOperator === '*') {
    return firstNumber * secondNumber;
  }
  return null;
};

const questionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);

  const operator = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operator.length);
  const randomOperator = operator[randomIndex];

  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = String(calc(firstNumber, secondNumber, randomOperator));
  return [question, correctAnswer];
};

const fullGame = () => {
  game(rules, questionAndAnswer);
};

export default fullGame;
