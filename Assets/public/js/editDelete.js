const modal = document.querySelector('#editModal');
const modalClose = document.querySelector('#modalClose');
const modalHeader = document.querySelector('#modalHeader');
const editForm = document.querySelector('#editForm');

let currentID;
let currentType;

const showEdit = async (event) => {
  event.preventDefault();
  let id = event.target.id;
  console.log(event.target.className);
  const editingItem =
    event.target.parentElement.parentElement.children[0].textContent;
  modal.setAttribute('class', 'contents');

  let type = budIncExp(event.target.className);
  currentType = type;
  currentID = id;

  modalHeader.textContent = 'Editing ' + editingItem + ' on ' + type;
  console.log(type);

  modalHeader.textContent;
};

const makeEdit = async (event) => {
  event.preventDefault();
  let id = event.target.id;
  const editName = document.querySelector('#editName').value.trim();
  const editAmount = document.querySelector('#editAmount').value.trim();
  let type = budIncExp(event.target.className);

  console.log(id);
  console.log(event.target.parentElement);
  console.log(currentType);
  console.log(currentID);

  if (editName && editAmount) {
    const res = await fetch(`/api/${currentType}/edit/${currentID}`, {
      method: 'PUT',
      body: JSON.stringify({ editName, editAmount }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      console.log('--------------- res.ok');
      location.reload();
    } else {
      alert('Failed to make edit');
    }
  }
};

const delItem = async (event) => {
  event.preventDefault();
  let id = event.target.id;
  console.log(event.target.className);
  let type = budIncExp2(event.target.className);
  currentType = type;
  currentID = id;

  const res = await fetch(`/api/${currentType}/delete/${currentID}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (res.ok) {
    console.log('--------------- res.ok');
    location.reload();
  } else {
    alert('Failed to delete');
  }
};

document
  .querySelectorAll('.editBudgetBtn')
  .forEach((el) => el.addEventListener('click', showEdit));

document
  .querySelectorAll('.editIncomeBtn')
  .forEach((el) => el.addEventListener('click', showEdit));

document
  .querySelectorAll('.editExpenseBtn')
  .forEach((el) => el.addEventListener('click', showEdit));

modalClose.addEventListener('click', function () {
  modal.setAttribute('class', 'hidden');
});

document
  .querySelectorAll('.deleteBudgetBtn')
  .forEach((el) => el.addEventListener('click', delItem));

document
  .querySelectorAll('.deleteIncomeBtn')
  .forEach((el) => el.addEventListener('click', delItem));

document
  .querySelectorAll('.deleteExpenseBtn')
  .forEach((el) => el.addEventListener('click', delItem));

editForm.addEventListener('submit', makeEdit);

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

const budIncExp2 = (className) => {
  let result;
  switch (className) {
    case 'btn deleteBudgetBtn':
      result = 'budget';
      break;
    case 'btn deleteExpenseBtn':
      result = 'expense';
      break;
    case 'btn deleteIncomeBtn':
      result = 'income';
      break;
  }
  return result;
};
