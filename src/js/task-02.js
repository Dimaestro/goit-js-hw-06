const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const makeIngredientsItemEl = (arr) => {
  return arr.map(item => {
    const listItemEl = document.createElement('li');
    listItemEl.classList.add('item');
    listItemEl.textContent = item;
    return listItemEl;
  })
}

const ingredientsListItemsEl = makeIngredientsItemEl(ingredients);
ingredientsListEl.append(...ingredientsListItemsEl);