const form = document.querySelector('.ad-form');
form.classList.add(`${form.className}--disabled`);

const mapFilter = document.querySelector('.map__filters');
mapFilter.classList.add(`${mapFilter.className}--disabled`);

const blockInnerFormItems = (form) => {
  const items = form.querySelectorAll('fieldset, select');
  items.forEach((item) => {
    item.disabled = true;
  });
};

blockInnerFormItems(form);
blockInnerFormItems(mapFilter);
