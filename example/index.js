import validex from '../dist/index.modern.js'


const form = document.querySelector('#form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const fullnameEle = document.querySelector('input[name=fullname]')
    const emailEle = document.querySelector('input[name=email]')
    const passwordEle = document.querySelector('input[type=password]')

    const data = {
        fullname: fullnameEle.value,
        email: emailEle.value,
        password: passwordEle.value,
    }
    
    const validator = validex(data, {
        fullname: {
            required: true,
            min: 4,
            max: 30,
            capitalize: true,
            notAllowedSpecialChars: true
        },
        email: {
            required: true,
            email: true,
            max: 100,
        },
        password: {
            required: true,
            strongPassword: true
        }
    })


    const isValid = validator.validate()

    if(!isValid){
        const errors = validator.getError()
        for(let name in errors){
            const field = document.querySelector(`input[name=${name}]`)

            if(field){

                // set the error message
                field.nextElementSibling.innerHTML = validator.getError(name)

                // remove Error
                field.onfocus = function(){
                    validator.removeError(name)
                    field.nextElementSibling.innerHTML = ''
                }
            }
        }
    }
})