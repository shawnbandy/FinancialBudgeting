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

    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();

    const username = firstName + lastName;
    const password = document.querySelector('#password-login').value.trim();

    console.log(password);
    console.log(username);

    if (username && password) {
      console.log('inside if');
      const reso = await fetch('/api/user/', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(reso);

      if (reso.ok) {
        document.location.replace('/dashboard'); //!will change this after the FE is developed
      } else {
        alert('Failed to sign up');
      }
    }
  }
};

const checkPassword = (event) => {};

document.querySelector('#signUpForm').addEventListener('submit', signUp);
