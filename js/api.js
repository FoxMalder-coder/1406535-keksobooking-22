import {showAlert} from './popup.js';

const getData = (onSuccess) => {
  return fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(['Что-то пошло не так... Попробуйте ещё раз']);
    })
    .then((json) => {
      onSuccess(json);
    })
    .catch((err) => {
      showAlert(err);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      }
      else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
