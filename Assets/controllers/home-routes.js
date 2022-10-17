const router = require('express').Router();
const sequelize = require('../config/connection');
const { Budget, Expenses, Household, Income, User } = require('../models');
const withAuth = require('../utils/auth');

//!SignUp
router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {}
});

//!Login
router.get('/login', async (req, res) => {
  res.render('login');
});

//!Homepage/Landing page
router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    console.log(err);
  }
});

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
    const budgetData = await Budget.findAll({});
    const budgetArr = budgetData.map((content) => content.get({ plain: true }));
    const budgetRev = budgetArr.reverse();

    //*this gets all of our expenses in plain data, then reverses it so the most recent expenses are first
    const expenseData = await Expenses.findAll({});
    const expenseArr = expenseData.map((content) =>
      content.get({ plain: true })
    );
    const expenseRev = expenseArr.reverse();

    //*this gets all of our incomes in plain data, then reverses it so the most recent incomes are first
    const incomeData = await Income.findAll({});
    const incomeArr = incomeData.map((content) => content.get({ plain: true }));
    const incomeRev = incomeArr.reverse();

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
  let budgetOption;
  let expenseOption;
  let incomeOption;

  //*ugly, but necessary because I can't use a switch case in handlebars, but I can use a nested if
  switch (req.params.type) {
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

//!
router.get('/edit', withAuth, async (req, res) => {
  try {
    res.render('edit', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {}
});

module.exports = router;
