const RENT_OBJECT_TYPES = [
  {
    bungalow: {
      name: 'Бунгало',
      minPrice: 0,
    },
  },
  {
    flat: {
      name: 'Квартира',
      minPrice: 1000,
    },
  },
  {
    house: {
      name: 'Дом',
      minPrice: 5000,
    },
  },
  {
    palace: {
      name: 'Дворец',
      minPrice: 10000,
    },
  },
];

const CENTER_TOKYO = {
  lat: 35.68950,
  lng: 139.69171,
};

const getRentObjectProperties = (string, price = false) => {

  const findedItem = RENT_OBJECT_TYPES.find((type) => {
    return Object.keys(type)[0] === string;
  });

  if (price) {
    return (Object.values(findedItem)[0].minPrice);
  }

  return (Object.values(findedItem)[0].name);
};

const getRandomInt = (a, b) => {
  if (a >= 0 && b >=0 && a % 1 === 0 && b % 1 === 0) {
    return (Math.floor(Math.random() * (b - a + 1) + a));
  }

  throw new Error('Input data error');
};

const getRandomFloat = (a, b, symbolNumber) => {
  let min, max, randomFloat;
  a > b ? (min = b, max = a) : (min = a, max = b);

  if (a >= 0 && b >= 0 && symbolNumber >= 0 && symbolNumber % 1 === 0) {
    min = Math.ceil(min * 10 ** symbolNumber);
    max = Math.floor(max * 10 ** symbolNumber);
    randomFloat = Math.round(Math.random() * (max - min) + min) / 10 ** symbolNumber;
    return +randomFloat.toFixed(symbolNumber);
  }

  throw new Error('Input data error');
};

const getRandomArrayElement = (array) => {
  return array[getRandomInt(0, array.length - 1)];
};

const isUnique = (array, value) => {
  return !array.some((arrayItem) => arrayItem === value);
};

const getRandomArrayChain = (array) => {
  let count = getRandomInt(0, array.length);
  let chain = [];
  while (count > 0) {
    let randomElem = getRandomArrayElement(array);
    if (isUnique(chain, randomElem)) {
      chain.push(randomElem);
      count --;
    }
  }
  return chain;
};

const getRandomAvatar = () => {
  return 'img/avatars/user0' + getRandomInt(1, 8) +'.png';
};

const getRandomLocation = () => {
  return {
    x: getRandomFloat(35.65, 35.7, 5),
    y: getRandomFloat(139.7, 139.8, 5),
  };
};

export {getRandomInt, getRandomArrayElement, getRandomArrayChain, getRandomAvatar, getRandomLocation, getRentObjectProperties, CENTER_TOKYO};
