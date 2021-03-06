import {CENTER_TOKYO} from './map.js';

const unblock = () => {
  const adForm = document.querySelector('.ad-form--disabled');
  adForm.classList.remove('ad-form--disabled');

  const mapFilter = document.querySelector('.map__filters--disabled');
  mapFilter.classList.remove('map__filters--disabled');

  const unblockInnerFormItems = (form) => {
    const items = form.querySelectorAll('fieldset, select');
    items.forEach((item) => {
      item.disabled = false;
    });
  };

  const address = document.querySelector('#address');
  address.readOnly = true;
  address.value = `${CENTER_TOKYO.lat}, ${CENTER_TOKYO.lng}`;

  unblockInnerFormItems(adForm);
  unblockInnerFormItems(mapFilter);
};

export {unblock};
