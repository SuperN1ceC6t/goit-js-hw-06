function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const span = document.querySelector('.color')
const body = document.querySelector('body')
const btn = document.querySelector('.change-color')

btn.addEventListener('click', (event) => {
  body.style.backgroundColor = getRandomHexColor()
  span.textContent = getRandomHexColor()
})