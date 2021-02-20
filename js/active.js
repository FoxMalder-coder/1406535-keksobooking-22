const unblock = () => {
  const form = document.querySelector('.ad-form--disabled');
  form.classList.remove('ad-form--disabled');

  const mapFilter = document.querySelector('.map__filters--disabled');
  mapFilter.classList.remove('map__filters--disabled');

  const unblockInnerFormItems = (form) => {
    const items = form.querySelectorAll('fieldset, select');
    items.forEach((item) => {
      item.disabled = false;
    });
  };

  unblockInnerFormItems(form);
  unblockInnerFormItems(mapFilter);
};

export {unblock};
