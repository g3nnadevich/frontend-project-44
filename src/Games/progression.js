import {getRandomNumber} from "../math.js";
import game from "../index.js";

const rules = 'What number is missing in the progression?';

const progression = (firstNumber, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i+=1) {
    if (progression.length === 0) {
      progression.push(firstNumber);
    } else {
      const newNumber = progression[i-1] + step;
      progression.push(newNumber);
    }
  }
  return progression;
};

const questionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 15);
  const arithmeticProgression = progression(firstNumber, step, length);
  const index = getRandomNumber(0, length - 1);
  const correctAnswer = String(arithmeticProgression[index]);
  arithmeticProgression[index] = '..';
  const question = arithmeticProgression;
  
  return [question, correctAnswer];
  
};

const fullGame = () => {
  game(rules, questionAndAnswer);
};

export default fullGame;
