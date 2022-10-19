const modal = document.querySelector('#editModal');
const modalClose = document.querySelector('#modalClose');
const modalHeader = document.querySelector('#modalHeader');

const edit = async (event) => {
  event.preventDefault();
  let id = event.target.id;
};

const showEdit = async (event) => {
  event.preventDefault();
  let id = event.target.id;
  console.log(event.target.className);
  const editingItem =
    event.target.parentElement.parentElement.children[0].textContent;
  modal.setAttribute('class', 'contents');

  let type = budIncExp(event.target.className);
  modalHeader.textContent = 'Editing ' + editingItem + ' on ' + type;
  console.log(type);

  //const res = await fetch('/api/')

  modalHeader.textContent;
};

document
  .querySelectorAll('.editBudgetBtn')
  .forEach((el) => el.addEventListener('click', showEdit));

modalClose.addEventListener('click', function () {
  modal.setAttribute('class', 'hidden');
});

const budIncExp = (className) => {
  let result;
  switch (className) {
    case 'btn editBudgetBtn':
      result = 'budget';
      break;
    case 'btn editExpenseBtn':
      result = 'expense';
      break;
    case 'btn editIncomeBtn':
      result = 'income';
      break;
  }
  return result;
};
