const form = document.forms.asker
const needInputs = form.querySelectorAll('.nes')
let all = document.querySelector('.all')
let need = document.querySelectorAll('.need')
let success = document.querySelector('.success')
let errors = document.querySelector('.error')
errors.innerHTML = 0
success.innerHTML = 0
const pattern = {
    name: /^[a-z ,.'-]+$/i,
    age: /^(1[0-9]|[2-9]\d)$/,
    email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    css: /^[a-zA-Z]*$/,
    js: /^[a-zA-Z]*$/,
    userInfo: /^[a-zA-Z]*$/,
    html: /^[a-zA-Z]*$/
}
all.innerHTML = form.querySelectorAll('input').length
need.forEach(n => {
    n.innerHTML = needInputs.length
})
form.onsubmit = (event) => {
    event.preventDefault()
    let err = []
    let suc = []
    needInputs.forEach(input => {
        if (input.value.length === 0) {
            err.push('error')
            input.style.border = 'var(--border-err)'
            input.nextSibling.nextSibling.style.color = 'red'
            input.nextSibling.nextSibling.innerHTML = `Please enter your ${input.name}`
        } else if (input.style.border === 'var(--border-err)') {
            err.push('error')
            input.style.border = 'var(--border-err)'
            input.nextSibling.nextSibling.style.color = 'red'
        } else {
            suc.push('success')
        }
    })
    errors.innerHTML = err.length
    success.innerHTML = suc.length
    return err.length === 0 ? submit() : console.log('You forgot smth');
}
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.style.border = 'var(--border-blue)'
        field.nextSibling.nextSibling.style.color = 'var(--grey-color)'
    } else {
        field.style.border = 'var(--border-err)'
        field.nextSibling.nextSibling.style.color = 'red'
    }
}
needInputs.forEach(input => {
    input.onkeyup = () => {
        validate(input, pattern[input.name])
    }
})
function submit() {
    let user = {}
    let fm = new FormData(form)
    fm.forEach((value, key) => {
        user[key] = value
    })
    console.log(user);
}