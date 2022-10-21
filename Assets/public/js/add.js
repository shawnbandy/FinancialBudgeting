const budgetAddBtn = document.querySelector('#budgetAdd');
const expenseAddBtn = document.querySelector('#expenseAdd');
const incomeAddBtn = document.querySelector('#incomeAdd');
const budgetViewAll = document.querySelector('#viewAllBudget');
const expenseViewAll = document.querySelector('#viewAllExpense');
const incomeViewAll = document.querySelector('#viewAllIncome');

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

const viewingAll = (event) => {
  event.preventDefault();

  const data = event.target.id;

  console.log(data);

  let type;
  switch (data) {
    case 'viewAllBudget':
      type = 'budget';
      break;
    case 'viewAllExpense':
      type = 'expense';
      break;
    case 'viewAllIncome':
      type = 'income';
      break;
    default:
      break;
  }
  document.location.replace(`/viewAll/${type}`);
};

budgetAddBtn.addEventListener('click', addingStuff);
expenseAddBtn.addEventListener('click', addingStuff);
incomeAddBtn.addEventListener('click', addingStuff);

budgetViewAll.addEventListener('click', viewingAll);
expenseViewAll.addEventListener('click', viewingAll);
incomeViewAll.addEventListener('click', viewingAll);
