const Result = {
  OK: 'success',
  ERROR: 'error',
};

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const main = document.querySelector('main');
const fragment = document.createDocumentFragment();

const showPopup = (result) => {
  const template = document.querySelector(`#${result}`).content.querySelector(`.${result}`);
  const element = template.cloneNode(true);
  main.appendChild(fragment.appendChild(element));

  const onEscPressed = (evt) => {
    if (isEscEvent(evt)) {
      closePopup();
    }
  };

  const closePopup = () => {
    element.remove();
    document.removeEventListener('keydown', onEscPressed);
  };

  document.addEventListener('keydown', onEscPressed);
  element.addEventListener('click', closePopup);

  if (result == Result.ERROR) {
    const button = document.querySelector(`#${result}`).content.querySelector(`.${result}__button`);
    button.addEventListener('click', closePopup);
  }
};

const onSuccess = () => {
  showPopup(Result.OK);
};

const onFail = () => {
  showPopup(Result.ERROR);
};

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {onSuccess, onFail, showAlert};
