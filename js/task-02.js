const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector('#ingredients')
const liItem = document.createElement('li')
const markup = ingredients.map((ingredient) => {
  liItem.textContent = ingredient
  liItem.classList.add('item')
}).join('')

container.insertAdjacentHTML('beforeend', markup)