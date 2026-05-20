import { getRandomNumber, isPrime } from '../math.js';
import game from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = String(getRandomNumber(1, 1000));
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  game(rules, getQuestionAndAnswer);
};
