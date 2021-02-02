const getRandomInt = (a, b) => {
  if (typeof a !='number' || typeof b !='number') {return 'Не числа!';}
  else {
    if (a % 1 != 0 || b % 1 != 0) {return 'Дроби!';}
    else {
      if (a < 0 || b < 0) {return 'Отрицательные числа!';}
      else {return Math.round(Math.random() * (b - a) + a);}
    }
  }
}

// В телеграме студентов прозвучало, что возвращать строку так себе. Если неважно почему возникает ошибка, возвращаем, например, -1. Переписала функцию с этими допущениями.
// p.s. Выпоняется только при введенных двух целых числах, так как в первом задании не написано, что числа могут быть дробными.

const getRandomInt_ = (a, b) => {
  if (a >= 0 && b >=0 && a % 1 === 0 && b % 1 === 0) {
    return (Math.round(Math.random() * (b - a) + a));
  }
  return -1;
}

const getRandomFloat = (a, b, symbolNumber) => {
  let min, max, randomFloat;
  a > b ? (min = b, max = a) : (min = a, max = b);
  if (typeof a !='number' || typeof b !='number' || typeof symbolNumber !='number') {return 'Не числа!';}
  else {
    if (a < 0 || b < 0 || symbolNumber < 0) {return 'Отрицательные числа!';}
    else {
      if ((max - min) < (1 / 10 ** symbolNumber)) {return 'Нет чисел, отвечающих условиям';}
      // Не понимаю одного момента - если вызываем, например, (4.1, 4.2, 1) функция работает - возвращает число. Если исходные данные с единицей, например, (1.1, 1.2, 1) или (14.1, 14.2, 1) возвращает нет чисел, отвечающих условиям. Как так?
      else {
        min = (Math.ceil(min * 10 ** symbolNumber) / 10 ** symbolNumber);
        max = (Math.floor(max * 10 ** symbolNumber) / 10 ** symbolNumber);
        randomFloat = (Math.random() * (max - min) + min);
        return +randomFloat.toFixed(symbolNumber);
      }
    }
  }
}

// Переписала :-)
const getRandomFloat_ = (a, b, symbolNumber) => {
  let min, max, randomFloat;
  a > b ? (min = b, max = a) : (min = a, max = b);
  if (a >= 0 && b >= 0 && symbolNumber >= 0 && symbolNumber % 1 === 0) {
    min = Math.ceil(min * 10 ** symbolNumber);
    max = Math.floor(max * 10 ** symbolNumber);
    randomFloat = Math.round(Math.random() * (max - min) + min) / 10 ** symbolNumber;
    return +randomFloat.toFixed(symbolNumber);
  }
  return -1;
}

getRandomInt();
getRandomInt_();
getRandomFloat();
getRandomFloat_();
