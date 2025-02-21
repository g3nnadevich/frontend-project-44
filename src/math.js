const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

const isEven = (number) => {
  return number % 2 === 0;
};

export {getRandomNumber, isEven};