const inputValidationEl = document.querySelector('#validation-input');

inputValidationEl.addEventListener('blur', onInputValidation);

function onInputValidation(event) {
  inputValidationEl.classList.add('invalid');
  
  if (event.currentTarget.value.length === +inputValidationEl.dataset.length) {
    inputValidationEl.classList.replace('invalid', 'valid');
  } 
};