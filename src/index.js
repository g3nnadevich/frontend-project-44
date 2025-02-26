import readlineSync from 'readline-sync';

const game = (rules, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  let attempts = 3;

  while (attempts > 0) {
    const [question, correctAnswer] = questionAndAnswer();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === yourAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    attempts -= 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;