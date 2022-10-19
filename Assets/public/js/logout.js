// Add an event listener to the logout button
const logout = async () => {
  const res = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (res.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out');
  }
};

//!add it to the logout button
document.querySelector('#logout').addEventListener('click', logout);
document.querySelector('#logoutSm').addEventListener('click', logout);
