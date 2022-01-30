const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', ()=> {
    if(validationInput.value.length === 6){
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    }
    else{
        
        validationInput.classList.add('invalid');
    }
})