const budgetAddBtn = document.querySelector('#budgetAdd');
const expenseAddBtn = document.querySelector('#expenseAdd');
const incomeAddBtn = document.querySelector('#incomeAdd');

const addingStuff = (event) => {
  event.preventDefault();

  const data = event.target.id;
  console.log(data);

  let type;
  switch (data) {
    case 'budgetAdd':
      type = 'budget';
      break;
    case 'expenseAdd':
      type = 'expense';
      break;
    case 'incomeAdd':
      type = 'income';
      break;
    default:
      break;
  }
  document.location.replace(`/add/${type}`);
};

budgetAddBtn.addEventListener('click', addingStuff);
expenseAddBtn.addEventListener('click', addingStuff);
incomeAddBtn.addEventListener('click', addingStuff);
