### Hexlet tests and linter status:
[![Actions Status](https://github.com/tatianaberezina/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/tatianaberezina/frontend-project-44/actions)

# Игры разума
Игры разума — это набор консольных CLI-мини-игр на JavaScript, направленных на тренировку логического мышления, базовых математических навыков и внимательности. Проект реализован в виде CLI-приложения с набором отдельных игр, запускаемых через разные команды.

## Возможности
- Набор состоит из 5 мини-игр:
    - brain-even — проверка на чётность
    - brain-calc — вычисление математических выражений
    - brain-progression — поиск пропущенного элемента в прогрессии
    - brain-gcd — нахождение наибольшего общего делителя
    - brain-prime — проверка простого числа
- Интерактивный игровой процесс в терминале
- Повторяемость и случайная генерация заданий

## Установка
- Требуется Node.js версии 16 и выше.
- Клонирование и установка репозитория:
```
git clone https://github.com/g3nnadevich/frontend-project-44.git
cd frontend-project-44
npm install
npm link
```
- Вызов справки ```brain-games```

## Запуск и правила игры
Вначале каждой игры необходимо ввести свое имя!
### Игра: "Проверка на чётность"
#### Запуск:
```brain-even```
#### Правила:
Игроку показывается случайное число. Нужно определить, является ли оно чётным. Введите yes, если число чётное, введите no, если число нечётное. Чтобы победить, необходимо дать 3 правильных ответа подряд. Неверный ответ или любой некорректный ввод сразу завершает игру поражением.
#### Пример игры:
```
brain-even

Welcome to the Brain Games!
May I have your name? Nikita
Hello, Nikita!
Answer "yes" if the number is even, otherwise answer "no".
Question: 5
Your answer: no
Correct!
Question: 4
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Nikita!
```

### Игра: "Калькулятор"
#### Запуск:
```brain-calc```
#### Правила:
Игроку показывается случайное математическое выражение которое нужно вычислить в уме и записать правильный ответ. Чтобы победить, необходимо дать 3 правильных ответа подряд. Неверный ответ или любой некорректный ввод сразу завершает игру поражением.
#### Пример игры:
```
brain-calc

Welcome to the Brain Games!
May I have your name? Nikita
Hello, Nikita!
What is the result of the expression?
Question: 4 + 12
Your answer: 16
Correct!
Question: 25 - 10
Your answer: 15
Correct!
Question: 3 * 4 
Your answer: 12
Correct!
Congratulations, Nikita!
```
### Игра: "Наибольший общий делитель"
#### Запуск:

```brain-progression```
#### Правила:

#### Пример игры:

### Игра: "Арифметическая прогрессия"
#### Запуск:
```brain-gcd```
#### Правила:

#### Пример игры:

### Игра: "Простое ли число?"
#### Запуск:
```brain-prime```
#### Правила:

#### Пример игры:





