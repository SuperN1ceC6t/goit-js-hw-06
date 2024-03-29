const form = document.querySelector('.login-form')
form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget;
    const formData = new FormData(form)
    const dataObject = {};
    formData.forEach((value, name) => { dataObject[name] = value })
    if (validateForm(dataObject)) {
        console.log(dataObject);
        form.reset()
    } else { alert('All fields must be fiellded') }
}

function validateForm(data) {
    for (let key in data) {
        if (data[key] === '') { return false }
    }
    return true
}