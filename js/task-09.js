function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const hexColor = document.querySelector('.color')
const background = document.querySelector('body')
const btn = document.querySelector('.change-color')

btn.addEventListener('click', (event) => {
  const randomColor = getRandomHexColor()
  background.style.backgroundColor = randomColor
  hexColor.textContent = randomColor
})