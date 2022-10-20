const router = require('express').Router();
const sequelize = require('../config/connection');
const { Budget, Expenses, Household, Income, User } = require('../models');
const withAuth = require('../utils/auth');
const calc = require('precise-calculator');
const { json } = require('express');

//!SignUp
router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {}
});

//!Login
router.get('/login', async (req, res) => {
  console.log('-----------login start');
  if (req.session.loggedIn) {
    console.log('inside if');
    res.redirect('/dashboard');
    return;
  } else {
    res.render('login');
  }
});

//!Homepage/Landing page
router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    console.log(err);
  }
});

router.get('/gettingStarted', async (req, res) => {
  try {
    res.render('gettingStarted');
  } catch (err) {
    console.log(err);
  }
});

// router.get('/Assets/views/layouts/main', async (req, res) => {
//   try {
//     res.render('homepage');
//   } catch (err) {
//     console.log(err);
//   }
// });

// about us route
router.get('/aboutus', async (req, res) => {
  try {
    res.render('aboutus');
  } catch (err) {
    res.status(400).json(err);
  }
});

//!Dashboard. Need to add WithAuth
router.get('/dashboard', withAuth, async (req, res) => {
  //*home page needs your budget, expenses, and incomes

  try {
    const budgetData = await Budget.findAll({
      where: {
        household_id: req.session.householdID,
      },
    });
    const budgetArr = budgetData.map((content) => content.get({ plain: true }));
    const budgetRev = budgetArr.reverse();

    //*this gets all of our expenses in plain data, then reverses it so the most recent expenses are first
    const expenseData = await Expenses.findAll({
      where: {
        household_id: req.session.householdID,
      },
    });
    const expenseArr = expenseData.map((content) =>
      content.get({ plain: true })
    );
    const expenseRev = displayFive(expenseArr.reverse());

    //*this gets all of our incomes in plain data, then reverses it so the most recent incomes are first
    const incomeData = await Income.findAll({
      where: {
        household_id: req.session.householdID,
      },
    });
    const incomeArr = incomeData.map((content) => content.get({ plain: true }));
    const incomeRev = displayFive(incomeArr.reverse());

    res.render('dashboard', {
      loggedIn: req.session.loggedIn,
      budgetRev,
      expenseRev,
      incomeRev,
      loggedIn: true,
    });
  } catch (err) {}
});

//!Adding something to budget/income/expense
router.get('/add/:type', withAuth, async (req, res) => {
  console.log(req.params.type);

  const choice = budOrExOrIn(req.params.type);

  let budgetOption = choice[0];
  let expenseOption = choice[1];
  let incomeOption = choice[2];

  try {
    const budgetData = await Budget.findAll({
      where: {
        household_id: req.session.householdID,
      },
    });

    const budgetArr = budgetData.map((content) => content.get({ plain: true }));
    console.log(budgetArr);

    res.render('add', {
      budgetArr,
      budgetOption,
      incomeOption,
      expenseOption,
      householdID: req.session.householdID,
      loggedIn: req.session.loggedIn,
      check: req.params.type,
    });
  } catch (err) {
    console.log(err);
  }
});

router.get('/viewAll/:type', withAuth, async (req, res) => {
  console.log(req.params.type);

  const choice = budOrExOrIn(req.params.type);

  let budgetOption = choice[0];
  let expenseOption = choice[1];
  let incomeOption = choice[2];

  //*ugly, but necessary because I can't use a switch case in handlebars, but I can use a nested if

  try {
    const budgetData = await Budget.findAll({
      where: {
        household_id: req.session.householdID,
      },
      include: [
        {
          model: Expenses,
        },
      ],
    });

    const budgetArr = budgetData.map((content) => content.get({ plain: true }));
    const budgetLeft = totalBudgetExpenses(budgetArr);
    for (let i = 0; i < budgetArr.length; i++) {
      budgetArr[i].budgetLeftover = budgetLeft[i];
    }
    console.log(budgetArr);

    const expenseData = await Expenses.findAll({
      where: {
        household_id: req.session.householdID,
      },
      include: [
        {
          model: Budget,
        },
      ],
    });
    const expenseArr = expenseData.map((content) =>
      content.get({ plain: true })
    );

    const incomeData = await Income.findAll({
      where: {
        household_id: req.session.householdID,
      },
    });
    const incomeArr = incomeData.map((content) => content.get({ plain: true }));

    console.log(budgetLeft);
    res.render('viewAll', {
      budgetArr,
      expenseArr,
      incomeArr,
      budgetOption,
      incomeOption,
      expenseOption,
      householdID: req.session.householdID,
      loggedIn: req.session.loggedIn,
      check: req.params.type,
    });
  } catch (err) {
    console.log(err);
  }
});

router.get('/viewOne/budget/:id', withAuth, async (req, res) => {
  try {
    const oneBudget = await Budget.findAll({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Expenses,
        },
      ],
    });

    const budgetArr = oneBudget.map((content) => content.get({ plain: true }));
    const allExpenses = budgetArr[0].expenses;
    const budgetName = budgetArr[0];
    console.log(budgetArr);
    console.log(allExpenses);

    res.render('viewOne', {
      budgetName,
      allExpenses,
      householdID: req.session.householdID,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {}
});

//!
router.get('/edit', withAuth, async (req, res) => {
  try {
    res.render('edit', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {}
});

const budOrExOrIn = (parameter) => {
  let budgetOption;
  let expenseOption;
  let incomeOption;
  switch (parameter) {
    case 'budget':
      budgetOption = true;
      expenseOption = false;
      incomeOption = false;
      break;
    case 'expense':
      budgetOption = false;
      expenseOption = true;
      incomeOption = false;
      break;
    case 'income':
      budgetOption = false;
      expenseOption = false;
      incomeOption = true;
      break;
  }
  const results = [budgetOption, expenseOption, incomeOption];
  return results;
};

const displayFive = (array) => {
  let newArray = [];
  if (array.length > 5) {
    for (let i = 0; i < 5; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  } else {
    return array;
  }
};

//*this function inputs a budget array, gets the budget amount, and then subtracts all relevant expenses for each budget category
const totalBudgetExpenses = (array) => {
  newArray = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].amount);

    for (let j = 0; j < array[i].expenses.length; j++) {
      sum = calc(sum).add(array[i].expenses[j].amount);
    }

    newArray[i] = calc(newArray[i]).sub(sum);
    sum = 0;
  }
  return newArray;
};

module.exports = router;
