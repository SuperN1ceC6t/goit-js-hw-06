const fontSizeControler = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
text.style.fontSize = `${fontSizeControler.value}px`

function sizeControler() { text.style.fontSize = `${fontSizeControler.value}px`}

fontSizeControler.addEventListener('input', sizeControler)