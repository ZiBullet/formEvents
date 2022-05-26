const form = document.forms.asker
const needInputs = form.querySelectorAll('.nes')
const name = form.querySelector('#name')
const spanName = form.querySelector('.spanName')
const spans = form.querySelectorAll('span')



form.onsubmit = (event) => {
    event.preventDefault()
    let errs = []
    needInputs.forEach(input => {
            spans.forEach(span => {
                if (input.value.length === 0) {
                    input.style.border = 'var(--border-err)'
                    errs.push('error')
                    span.style.color = 'red'
                } 
            })
    })
    
    return errs.length === 0 ? submit() : console.log('smth went wrong');
}


function submit() {
    let user = {}
    let fm = new FormData(form)
    fm.forEach((value, key) => {
        user[key] = value
    })
    console.log(user);
}