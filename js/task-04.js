
const buttonPlus = document.querySelector('button[data-action="increment"]');

const buttonMinus = document.querySelector('button[data-action="decrement"]');

const value = document.getElementById('value')

let counterValue = 0

function plusOne() {
    counterValue += 1
    value.textContent = counterValue
}

function minusOne() {
    counterValue -= 1
    value.textContent = counterValue
}

buttonPlus.addEventListener('click', plusOne)

buttonMinus.addEventListener('click', minusOne)