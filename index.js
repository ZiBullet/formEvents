const form = document.forms.asker
const needInputs = form.querySelectorAll('.needed')
const name = form.querySelector('#name')

form.onsubmit = (event) => {
    event.preventDefault()
    let errs = []
    needInputs.forEach(input => {
        if (input.classList.contains('invalid') || input.length === 0) {
            errs.push('error')
            input.style.border = '2px solid red'
        }
    })
    return errs.length === 0 ? submit() : 'smth went wrong'
}

function submit() {
    let user = {}
    let fm = new FormData(form)
    fm.forEach((value, key) => {
        user[key] = value
    })
    console.log(user);
}