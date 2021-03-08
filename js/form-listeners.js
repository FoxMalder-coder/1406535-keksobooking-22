import {sendData} from './api.js';
import {resetMainMarker} from './map.js';
import {onSuccess, onFail} from './popup.js';
import {onTypeChange} from './form.js';

const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(
    () => {
      onSuccess();
      adForm.reset();
      mapFilter.reset();
    },
    () => {
      onFail();
    },
    new FormData(evt.target),
  );
});

adForm.addEventListener('reset', () => {
  adForm.reset();
  mapFilter.reset();
  setTimeout(() => {
    onTypeChange();
    resetMainMarker();
  }, 0);
});
