// const budgetForm = document.querySelector('#budgetForm');
// const incomeForm = document.querySelector('#incomeForm');
// const expenseForm = document.querySelector('#expenseForm');
const form = document.querySelector('.form');

//!need to add a way to find out which budget it's going to

const submitData = async (event) => {
  event.preventDefault();
  //*get the form type, name, and amount
  const formID = event.target.id;
  const name = document.querySelector('.name').value.trim();
  const amount = document.querySelector('.amount').value.trim();
  console.log(Number(amount));

  if (isNaN(amount)) {
    alert('Please enter a number in the amount form');
    return;
  }

  let type;
  switch (formID) {
    case 'budgetForm':
      type = 'budget';
      if (name && amount) {
        makeApiCreateRqst(type, name, amount);
      }
      break;

    case 'expenseForm':
      type = 'expense';
      //*need to find a way to add the budget ID here... maybe a selection option on the HTML?
      if (name && amount) {
        const res = await fetch(`api/${type}/create`, {
          method: 'POST',
          body: JSON.stringify({ name, amount }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to add');
          console.log(res);
        }
      }
    //*make the API call
  }
};

const makeApiCreateRqst = async (type, name, amount, parentID) => {
  const res = await fetch(`/api/${type}/create`, {
    method: 'POST',
    body: JSON.stringify({ name, amount, parentID }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (res.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to add');
  }
};

form.addEventListener('submit', submitData);
// budgetForm.addEventListener('submit', submitData);
// incomeForm.addEventListener('submit', submitData);
// expenseForm.addEventListener('submit', submitData);
