/* global L:readonly */
import {unblock} from './active.js';
import {createLayoutForRentObject} from './layout.js';

const CENTER_TOKYO = {
  lat: 35.68950,
  lng: 139.69171,
};

const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', unblock)
  .setView({
    lat: CENTER_TOKYO.lat,
    lng: CENTER_TOKYO.lng,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const icon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainMarker = L.marker(
  {
    lat: CENTER_TOKYO.lat,
    lng: CENTER_TOKYO.lng,
  },
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
).addTo(map);


mainMarker.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

const resetMainMarker = () => {
  mainMarker.setLatLng({
    lat: CENTER_TOKYO.lat,
    lng: CENTER_TOKYO.lng,
  });
  address.value = `${CENTER_TOKYO.lat}, ${CENTER_TOKYO.lng}`;
};

// mainPinMarker.remove();

const renderOrdinaryMarkers = (points) => {
  points.forEach((point) => {
    const { location: {lat, lng} } = point;

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
};

export {renderOrdinaryMarkers, resetMainMarker, CENTER_TOKYO};
