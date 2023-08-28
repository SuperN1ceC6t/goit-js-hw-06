const fontSizeControler = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
fontSizeControler.addEventListener('input', (event) => { text.style.fontSize = event.currentTarget.value + 'px'})