import './initial.js';
import {getData} from './api.js';
import {renderOrdinaryMarkers} from './map.js';
import './form.js';
import './form-listeners.js';

const SIMILAR_OBJECTS_COUNT = 10;

getData((objects) => {
  renderOrdinaryMarkers(objects.slice(0, SIMILAR_OBJECTS_COUNT));
});
