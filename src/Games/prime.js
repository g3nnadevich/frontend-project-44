import {getRandomNumber, isPrime} from "../math.js";
import game from "../index.js";

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const questionAndAnswer = () => {
  const number = String(getRandomNumber(1, 1000));
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

const fullGame = () => {
  game(rules, questionAndAnswer);
};

export default fullGame;

fullGame();