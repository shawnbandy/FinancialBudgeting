const signUp = async (event) => {
  event.preventDefault();
  const passwordAttempt = document
    .querySelector('#password-login')
    .value.trim();
  const passwordConfirm = document
    .querySelector('#password-confirm')
    .value.trim();
  if (passwordAttempt !== passwordConfirm) {
    alert('Passwords must match');
    return;
  } else {
    console.log('readhed');
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
      console.log('inside if');
      const reso = await fetch('/api/user/', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(reso);

      if (reso.ok) {
        document.location.replace('/tutorial1'); //!will change this after the FE is developed
      } else {
        alert('Failed to sign up');
      }
    }
  }
};

const checkPassword = (event) => {};

document.querySelector('#signUpForm').addEventListener('submit', signUp);
