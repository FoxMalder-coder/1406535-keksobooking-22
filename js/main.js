const SIMILAR_RENT_OBJECT_COUNT = 10;

const TITLE = [
  'Уютное гнездышко для молодоженов',
  'Маленькая квартирка рядом с парком',
  'Небольшая лавочка в парке',
  'Императорский дворец в центре Токио',
  'Милейший чердачок',
  'Наркоманский притон',
  'Чёткая хата',
  'Стандартная квартира в центре',
  'Тихая квартирка недалеко от метро',
  'Милое гнездышко для фанатов Анимэ',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Великолепный таун-хауc в центре Токио. Подходит как туристам, так и бизнесменам. Дом полностью укомплектован и имеет свежий ремонт.',
  'Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.',
  'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
  'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
  'Маленькая квартирка на чердаке. Для самых нетребовательных.',
  'У нас есть всё! Шприцы, интернет, кофе. Для всех кто знает толк в отдыхе. Полицию просим не беспокоить.',
  'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
  'Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.',
  'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
  'Хейтеров просьба не беспокоить.',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];


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
  return array.some(arrayValue => arrayValue === value) ? false : true;
};

const getRandomArrayChain = (array) => {
  let count = getRandomInt(0, array.length - 1);
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

const createRentObject = () => {
  const address = getRandomLocation();
  return {
    author: {
      avatar: getRandomAvatar(),
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: '' + address.x + ', ' + address.y,
      price: getRandomInt(0, 1000000),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInt(1, 100),
      guests: getRandomInt(1, 300),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArrayChain(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArrayChain(PHOTOS),
    },
    location: address,
  };
}

const similarRentObjects = new Array(SIMILAR_RENT_OBJECT_COUNT).fill(null).map(() => createRentObject());

alert(similarRentObjects);
