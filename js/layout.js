import {convertRentObjectType} from './utils.js';
import {generateListOfLi} from './utils.js';
import {generateListOfImg} from './utils.js';

const map = document.querySelector('#map-canvas');
const templateFragment = document.querySelector('#card').content;
const template = templateFragment.querySelector('article');
const fragment = document.createDocumentFragment();

const createLayoutForRenObject = (object) => {
  const element = template.cloneNode(true);

  const title = element.querySelector('.popup__title');
  title.textContent = object.offer.title;

  const address = element.querySelector('.popup__text--address');
  address.textContent = object.offer.address;

  const price = element.querySelector('.popup__text--price');
  price.innerHTML = object.offer.price + ' <span>₽/ночь</span>';

  const type = element.querySelector('.popup__type');
  type.textContent = convertRentObjectType(object.offer.type);

  const guests = element.querySelector('.popup__text--capacity');
  guests.textContent = object.offer.rooms + ' комнаты для ' + object.offer.guests + ' гостей';

  const time = element.querySelector('.popup__text--time');
  time.textContent = 'Заезд после ' + object.offer.checkin + ', выезд до ' + object.offer.checkout;

  const features = element.querySelector('.popup__features');
  features.innerHTML = '';
  features.appendChild(generateListOfLi(object.offer.features));

  const description = element.querySelector('.popup__description');
  description.textContent = object.offer.description;

  const photos = element.querySelector('.popup__photos');
  photos.innerHTML = '';
  photos.appendChild(generateListOfImg(object.offer.photos));

  const avatar = element.querySelector('.popup__avatar');
  avatar.src = object.author.avatar;

  fragment.appendChild(element);

  return fragment;
};

const createLayoutForSimularRenObjects = (array, number) => {
  if (number > array.length) {
    number = array.length;
  };

  for (let i = 0; i < number; i++) {
    map.appendChild(createLayoutForRenObject(array[i]));
  };
};


export {createLayoutForSimularRenObjects};
