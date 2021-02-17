const PRICE_MIN_BUNGALOW = 0;
const PRICE_MIN_FLAT = 1000;
const PRICE_MIN_HOUSE = 5000;
const PRICE_MIN_PALACE = 10000;

const type = document.querySelector('#type');
const price = document.querySelector('#price');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

const onSelectTypeChange = () => {
  const value = type.options[type.selectedIndex].value;
  switch (value) {
    case 'bungalow': price.placeholder = PRICE_MIN_BUNGALOW; price.min = PRICE_MIN_BUNGALOW; break;
    case 'house': price.placeholder = PRICE_MIN_HOUSE, price.min = PRICE_MIN_HOUSE; break;
    case 'palace': price.placeholder = PRICE_MIN_PALACE, price.min = PRICE_MIN_PALACE; break;
    default: price.placeholder = PRICE_MIN_FLAT, price.min = PRICE_MIN_FLAT;
  }
};

const onSelectTimeChange = (evt) => {
  evt.target.id === 'timein' ? timeout.selectedIndex = timein.selectedIndex : timein.selectedIndex = timeout.selectedIndex;
};

type.addEventListener('change', onSelectTypeChange);
timein.addEventListener('change', onSelectTimeChange);
timeout.addEventListener('change', onSelectTimeChange);
