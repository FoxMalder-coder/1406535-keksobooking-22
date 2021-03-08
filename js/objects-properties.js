const OBJECTS_TYPES = [
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

const getRentObjectProperties = (string, price = false) => {

  const findedItem = OBJECTS_TYPES.find((type) => {
    return Object.keys(type)[0] === string;
  });

  if (price) {
    return (Object.values(findedItem)[0].minPrice);
  }

  return (Object.values(findedItem)[0].name);
};

export {getRentObjectProperties};
