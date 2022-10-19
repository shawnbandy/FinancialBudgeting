const viewOne = async (event) => {
  event.preventDefault();
  let id = event.target.id;
  console.log(id);

  const res = await fetch(`/viewOne/budget/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (res.ok) {
    document.location.replace(`/viewOne/budget/${id}`);
  } else {
    alert('Failed to view');
  }
};

document
  .querySelectorAll('.viewOne')
  .forEach((el) => el.addEventListener('click', viewOne));
