import {getRentObjectProperties} from './utils.js';
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const MAX_ROOMS = 100;
const MIN_GUESTS = 0;

const type = document.querySelector('#type');
const price = document.querySelector('#price');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');
const title = document.querySelector('#title');
const rooms = document.querySelector('#room_number');
const guests = document.querySelector('#capacity');

type.addEventListener('change', () => {
  const value = type.options[type.selectedIndex].value;
  const minPrice = getRentObjectProperties(value, true);
  price.placeholder = minPrice;
  price.min = minPrice;
});

const onSelectTimeChange = (evt) => {
  evt.target.id === 'timein' ? timeout.selectedIndex = timein.selectedIndex : timein.selectedIndex = timeout.selectedIndex;
};

timein.addEventListener('change', onSelectTimeChange);
timeout.addEventListener('change', onSelectTimeChange);


title.addEventListener('input', () => {
  const valueLength = title.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`Еще ${MIN_TITLE_LENGTH - valueLength} симв.`);
  }
  else if (valueLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity(`${valueLength - MAX_TITLE_LENGTH} симв. лишние`);
  }
  else {
    title.setCustomValidity('');
  }

  title.reportValidity();
});

price.addEventListener('input', () => {
  const value = price.value;

  if (value < price.min) {
    price.setCustomValidity(`Цена не может быть меньше ${price.min} ₽/ночь`);
  }
  else if (value > MAX_PRICE) {
    price.setCustomValidity(`Цена не может быть больше ${MAX_PRICE} ₽/ночь`);
  }
  else {
    price.setCustomValidity('');
  }

  price.reportValidity();
});

const onSelectRoomsGuestsChange = () => {
  if (rooms.value < guests.value && rooms.value != MAX_ROOMS && guests.value != MIN_GUESTS) {
    rooms.setCustomValidity('');
    guests.setCustomValidity('Гостей не может быть больше, чем комнат');
  }
  else if (rooms.value == MAX_ROOMS && guests.value != MIN_GUESTS) {
    rooms.setCustomValidity('');
    guests.setCustomValidity('Единственный доступный выбор "Не для гостей"');
  }
  else if (guests.value == MIN_GUESTS && rooms.value != MAX_ROOMS) {
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
