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
const templateFragment = document.querySelector('#card').content;
const template = templateFragment.querySelector('article');
const fragment = document.createDocumentFragment();

const createLayoutForRentObject = (object) => {
  const element = template.cloneNode(true);

  const title = element.querySelector('.popup__title');
  object.offer.title ? title.textContent = object.offer.title : title.remove();

  const address = element.querySelector('.popup__text--address');
  object.offer.address ? address.textContent = object.offer.address : address.remove();

  const price = element.querySelector('.popup__text--price');
  object.offer.price ? price.innerHTML = `${object.offer.price} <span>₽/ночь</span>` : price.remove();

  const type = element.querySelector('.popup__type');
  object.offer.type ? type.textContent = convertRentObjectType(object.offer.type) : type.remove();

  const guests = element.querySelector('.popup__text--capacity');
  object.offer.rooms ? guests.textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостей` : guests.remove();

  const time = element.querySelector('.popup__text--time');
  object.offer.checkin ? time.textContent = `Заезд после ${object.offer.checkin}, выезд до ${object.offer.checkout}` : time.textContent = 'Заезд после 12:00, выезд до 12:00';

  const features = element.querySelector('.popup__features');
  features.innerHTML = '';
  features.appendChild(generateListOfLi(object.offer.features));

  const description = element.querySelector('.popup__description');
  object.offer.description ? description.textContent = object.offer.description : description.remove();

  const photos = element.querySelector('.popup__photos');
  photos.innerHTML = '';
  photos.appendChild(generateListOfImg(object.offer.photos));

  const avatar = element.querySelector('.popup__avatar');
  object.author.avatar ? avatar.src = object.author.avatar : avatar.remove();

  fragment.appendChild(element);

  map.appendChild(fragment);
};

export {createLayoutForRentObject};
