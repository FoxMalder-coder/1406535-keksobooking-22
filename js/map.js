/* global L:readonly */
import {unblock} from './active.js';
import {CENTER_TOKYO} from './utils.js';
import {createSimilarRentObjects as points} from './data.js';
import {createLayoutForRentObject} from './layout.js';

const address = document.querySelector('#address');
const changeCoordinates = ({lat, lng}) => {
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  address.disabled = true;
};

changeCoordinates(CENTER_TOKYO);

const map = L.map('map-canvas')
  .on('load', unblock)
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.68950,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  changeCoordinates(evt.target.getLatLng());
});

// mainPinMarker.remove();

points.forEach((point) => {
  const {location: {x: lat, y: lng}} = point;
  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      createLayoutForRentObject(point),
      {
        keepInView: true,
      },
    );
});
