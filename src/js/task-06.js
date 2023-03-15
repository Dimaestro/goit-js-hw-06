const inputValidationEl = document.querySelector('#validation-input');

inputValidationEl.addEventListener('blur', onInputValidation);

function onInputValidation(event) {
  if (event.currentTarget.value.length === +inputValidationEl.dataset.length) {
    inputValidationEl.classList.remove('invalid');
    inputValidationEl.classList.add('valid');
  } else {
    inputValidationEl.classList.remove('valid');
    inputValidationEl.classList.add('invalid');
  }
};