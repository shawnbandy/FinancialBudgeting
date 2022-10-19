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
      //*idea from https://ricardometring.com/
      const select = document.getElementById('budgetID');
      console.log(select.id);

      if (!select.options[select.selectedIndex]) {
        alert('Please add a budget first');
      }
      const budget_id = select.options[select.selectedIndex].id;
      console.log(budget_id);

      if (name && amount) {
        makeApiCreateRqst(type, name, amount, budget_id);
      }
      break;

    case 'incomeForm':
      type = 'income';
      if (name && amount) {
        makeApiCreateRqst(type, name, amount);
      }
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
    console.log(res);
  }
};

form.addEventListener('submit', submitData);
// budgetForm.addEventListener('submit', submitData);
// incomeForm.addEventListener('submit', submitData);
// expenseForm.addEventListener('submit', submitData);
