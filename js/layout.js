const convertRentObjectType = (type) => {
  let newType;

  switch (type) {
    case 'bungalow': newType = 'Бунгало'; break;
    case 'house': newType = 'Дом'; break;
    case 'palace': newType = 'Дворец'; break;
    default: newType = 'Квартира';
  }

  return newType;
};

const generateListOfLi = (array) => {
  const list = document.createDocumentFragment();

  for (let i = 0; i < array.length; i++) {
    const item = document.createElement('li');
    item.className = 'popup__feature';
    item.classList.add(`popup__feature--${array[i]}`);
    list.appendChild(item);
  }
  return list;
};

const generateListOfImg = (array) => {
  const list = document.createDocumentFragment();

  for (let i = 0; i < array.length; i++) {
    const item = document.createElement('img');
    item.className = 'popup__photo';
    item.width = 45;
    item.height = 40;
    item.alt = 'Фотография жилья';
    item.src = array[i];
    list.appendChild(item);
  }
  return list;
};

const map = document.querySelector('#map-canvas');
const template = document.querySelector('#card').content.querySelector('article');
const fragment = document.createDocumentFragment();

const createLayoutForRentObject = (object) => {
  const { author: {avatar}, offer: {title, address, price, type, rooms, guests, checkin, features, description, photos} } = object;
  const element = template.cloneNode(true);

  element.querySelector('.popup__title').textContent = title;
  element.querySelector('.popup__text--address').textContent = address;
  element.querySelector('.popup__text--price').innerHTML = `${price} <span>₽/ночь</span>`;
  element.querySelector('.popup__type').textContent = convertRentObjectType(type);
  element.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей`;
  element.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkin}`;

  const newFeatures = element.querySelector('.popup__features');
  newFeatures.innerHTML = '';
  features.length ? newFeatures.appendChild(generateListOfLi(features)) : newFeatures.remove();

  const newDescription = element.querySelector('.popup__description');
  description ? newDescription.textContent = description : newDescription.remove();

  const newPhotos = element.querySelector('.popup__photos');
  newPhotos.innerHTML = '';
  photos.length ? newPhotos.appendChild(generateListOfImg(photos)) : newPhotos.remove();

  const newAvatar = element.querySelector('.popup__avatar');
  avatar ? newAvatar.src = avatar : newAvatar.remove();

  fragment.appendChild(element);

  map.appendChild(fragment);
};

export {createLayoutForRentObject};
