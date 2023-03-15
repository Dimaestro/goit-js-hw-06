const formLoginEl = document.querySelector('.login-form');

formLoginEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password,}
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
    return;
  }

  const userLogin = {
    email: email.value,
    password: password.value,
  };

  console.log(userLogin);
  event.currentTarget.reset();

}
