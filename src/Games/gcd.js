import game from '../index.js';
import { getRandomNumber } from '../math.js';

const rules = 'Find the greatest common divisor of given numbers.';

const NOD = (firstNumber, secondNumber) => {
  if (secondNumber > firstNumber) return NOD(secondNumber, firstNumber);
  if (!secondNumber) return firstNumber;
  return NOD(secondNumber, firstNumber % secondNumber);
};

const questionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(NOD(firstNumber, secondNumber));
  return [question, correctAnswer];
};

const fullGame = () => {
  game(rules, questionAndAnswer);
};

export default fullGame;
