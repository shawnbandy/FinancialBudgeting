// const hhBtn = document.querySelector('#houseHoldAddBtn');

// const addHH = async (event) => {
//   event.preventDefault();
//   const name = prompt('Enter the name of the household');

//   if (name) {
//     const res = await fetch('/api/household/create', {
//       method: 'POST',
//       body: JSON.stringify({ name }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (res.ok) {
//       document.location.reload();
//     } else {
//       alert('failed to create HH');
//     }
//   }
// };

// hhBtn.addEventListener('click', addHH);
