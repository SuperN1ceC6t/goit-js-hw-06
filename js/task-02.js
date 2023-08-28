const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (let ingredient of ingredients) {
  const li = document.createElement('li')
  li.textContent = ingredient
  li.classList.add('item')
  document.querySelector('ul').append(li)
  
}
console.log(document.querySelector('ul'));