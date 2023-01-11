const myForm = document.querySelector('#my-form')
const emailInput  = document.querySelector('#email')
const emailSubmit = document.querySelector('#email-submit')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()
    
    if(emailInput.value != '') {
        emailInput.value = ''
        emailInput.placeholder = 'Thanks for Subscribing!'
        emailInput.setAttribute('disabled', '')
        emailSubmit.value = 'Subscribed!'
        emailSubmit.setAttribute('disabled', '')
    }

}