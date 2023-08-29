const inputField = document.querySelector('#validation-input')

function onFocusChange() {
    const maxSymbolLength = inputField.dataset.length

    const inputContentLength = inputField.value.trim().length

    if (inputContentLength === Number(maxSymbolLength)) {
        inputField.classList.remove('invalid')
        inputField.classList.add('valid')
    } else {
        inputField.classList.remove('valid')
        inputField.classList.add('invalid')
    }
}

inputField.addEventListener('blur', onFocusChange)

