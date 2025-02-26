import { getRandomNumber } from '../math.js';
import game from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const questionAndAnswer = () => {
  const question = String(getRandomNumber(1, 100));
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const fullGame = () => {
  game(rules, questionAndAnswer);
};

export default fullGame;
