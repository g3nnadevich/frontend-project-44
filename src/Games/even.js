import {getRandomNumber, isEven} from "../math.js";
import game from "../index.js";

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionAndAnswer = () => {
  const number = String(getRandomNumber(1, 100));
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

const fullGame = () => {
  game(rules, questionAndAnswer);
};

export default fullGame;