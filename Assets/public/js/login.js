//*require the seed data in this folder

//*function to populate the db

const logInButton = document.querySelector('#sign-in');
const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#password');

const logIn = async (event) => {
  event.preventDefault();

  const username = usernameField.value;
  const password = passwordField.value;

  console.log(`${username} and the ${password}`);

  if (username && password) {
    const res = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to log in');
    }
  }
};

logInButton.addEventListener('click', logIn);
