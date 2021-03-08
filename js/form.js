import {getRentObjectProperties} from './objects-properties.js';

const TitleInputProperties = {
  MIN: 30,
  MAX: 100,
}

const ROOMS_INPUT_MAX = 100;
const GUESTS_INPUT_MIN = 0;

const type = document.querySelector('#type');
const price = document.querySelector('#price');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');
const title = document.querySelector('#title');
const rooms = document.querySelector('#room_number');
const guests = document.querySelector('#capacity');

const onTypeChange = () => {
  const value = type.options[type.selectedIndex].value;
  const minPrice = getRentObjectProperties(value, true);
  price.placeholder = minPrice;
  price.min = minPrice;
}

type.addEventListener('change', onTypeChange);

const onSelectTimeChange = (evt) => {
  evt.target.id === 'timein' ? timeout.selectedIndex = timein.selectedIndex : timein.selectedIndex = timeout.selectedIndex;
};

timein.addEventListener('change', onSelectTimeChange);
timeout.addEventListener('change', onSelectTimeChange);


title.addEventListener('input', () => {
  const valueLength = title.value.length;

  if (valueLength < TitleInputProperties.MIN) {
    title.setCustomValidity(`Еще ${TitleInputProperties.MIN - valueLength} симв.`);
  }
  else if (valueLength > TitleInputProperties.MAX) {
    title.setCustomValidity(`${valueLength - TitleInputProperties.MAX} симв. лишние`);
  }
  else {
    title.setCustomValidity('');
  }

  title.reportValidity();
});

price.addEventListener('input', () => {
  const value = Number(price.value);

  if (value < price.min) {
    price.setCustomValidity(`Цена не может быть меньше ${price.min} ₽/ночь`);
  }
  else if (value > price.max) {
    price.setCustomValidity(`Цена не может быть больше ${price.max} ₽/ночь`);
  }
  else {
    price.setCustomValidity('');
  }

  price.reportValidity();
});

const onSelectRoomsGuestsChange = () => {
  if (rooms.value < guests.value && rooms.value != ROOMS_INPUT_MAX && guests.value != GUESTS_INPUT_MIN) {
    rooms.setCustomValidity('');
    guests.setCustomValidity('Гостей не может быть больше, чем комнат');
  }
  else if (rooms.value == ROOMS_INPUT_MAX && guests.value != GUESTS_INPUT_MIN) {
    rooms.setCustomValidity('');
    guests.setCustomValidity('Единственный доступный выбор "Не для гостей"');
  }
  else if (guests.value == GUESTS_INPUT_MIN && rooms.value != ROOMS_INPUT_MAX) {
    rooms.setCustomValidity('Единственный доступный выбор "100 комнат"');
    guests.setCustomValidity('');
  }
  else {
    rooms.setCustomValidity('');
    guests.setCustomValidity('');
  }

  rooms.reportValidity();
  guests.reportValidity();
};

rooms.addEventListener('change', onSelectRoomsGuestsChange);
guests.addEventListener('change', onSelectRoomsGuestsChange);

export {onTypeChange};
