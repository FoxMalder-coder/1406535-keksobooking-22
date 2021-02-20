import {getRentObjectProperties} from './utils.js';

const type = document.querySelector('#type');
const price = document.querySelector('#price');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

const onSelectTypeChange = () => {
  const value = type.options[type.selectedIndex].value;
  const minPrice = getRentObjectProperties(value, true);
  price.placeholder = minPrice;
  price.min = minPrice;
};

const onSelectTimeChange = (evt) => {
  evt.target.id === 'timein' ? timeout.selectedIndex = timein.selectedIndex : timein.selectedIndex = timeout.selectedIndex;
};

type.addEventListener('change', onSelectTypeChange);
timein.addEventListener('change', onSelectTimeChange);
timeout.addEventListener('change', onSelectTimeChange);
