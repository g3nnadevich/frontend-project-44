import {getRandomNumber, isEven} from "../math.js";
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const questionAndAnswer = () => {
  const number = String(getRandomNumber(1, 100));
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

const Game = (questionAndAnswer) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let attempts = 3;

  while (attempts > 0) {
    const [number, answer] = questionAndAnswer();
    console.log(`Question: ${number}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (answer === yourAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    attempts -= 1;
  }

  console.log(`Congratulations, ${name}!`);
};

const fullGame = () => {
  Game(questionAndAnswer);
};

export default fullGame;