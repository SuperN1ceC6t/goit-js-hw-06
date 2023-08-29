
const categorieItemsCount = document.querySelectorAll('.item').length;
console.log('Number of categories:',categorieItemsCount);

const categorieItemsList = document.querySelectorAll('.item');

categorieItemsList.forEach((item) => {
    console.log('Category:', item.firstElementChild.textContent), console.log('Elements:', item.lastElementChild.children.length);
})


