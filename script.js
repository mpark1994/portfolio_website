const myForm = document.querySelector('#my-form')
const emailInput  = document.querySelector('#email')
const emailSubmit = document.querySelector('#email-submit')

myForm.addEventListener('submit', onSubmit)

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  
// This is a placeholder to emulate a subscription - if needed, make a functioning newsletter subscription.
function onSubmit(e) {
    e.preventDefault()
    
    if (validateEmail(emailInput.value)) {
        emailInput.value = ''
        emailInput.placeholder = 'Thanks for Subscribing!'
        emailInput.setAttribute('disabled', '')
        emailSubmit.value = 'Subscribed!'
        emailSubmit.setAttribute('disabled', '')
    }
}