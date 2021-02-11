import {TITLE, TYPE, FEATURES, DESCRIPTION, PHOTOS} from './const.js';
import {COUNT as SIMILAR_RENT_OBJECT_COUNT} from './const.js';
import {TIME as CHECKIN_CHECKOUT_TIME} from './const.js';
import {getRandomInt, getRandomArrayElement, getRandomArrayChain, getRandomAvatar, getRandomLocation} from './util.js';

const createRentObject = () => {
  const address = getRandomLocation();
  return {
    author: {
      avatar: getRandomAvatar(),
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: '' + address.x + ', ' + address.y,
      price: getRandomInt(0, 1000000),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInt(1, 100),
      guests: getRandomInt(1, 300),
      checkin: getRandomArrayElement(CHECKIN_CHECKOUT_TIME),
      checkout: getRandomArrayElement(CHECKIN_CHECKOUT_TIME),
      features: getRandomArrayChain(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArrayChain(PHOTOS),
    },
    location: address,
  };
}

const similarRentObjects = new Array(SIMILAR_RENT_OBJECT_COUNT).fill(null).map(() => createRentObject());

export {similarRentObjects};
