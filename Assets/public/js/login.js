//*require the seed data in this folder

//*function to populate the db

const logInButton = document.querySelector('#sign-in');
const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');

const logIn = async (event) => {
  event.preventDefault();

  const email = emailField.value;
  const password = passwordField.value;

  console.log(`${email} and the ${password}`);

  if (email && password) {
    const res = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      console.log('--------------- res.ok');
      document.location.replace('/dashboard');
    } else {
      alert('Failed to log in');
    }
  }
};

logInButton.addEventListener('click', logIn);
