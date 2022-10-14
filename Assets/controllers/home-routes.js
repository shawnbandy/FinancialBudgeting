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
  if (req.session.loggedIn) {
    res.redirect('/dashboard', {
      loggedIn: req.session.loggedIn,
    });
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

//!Dashboard. Need to add WithAuth
router.get('/dashboard', withAuth, async (req, res) => {
  //*home page needs your budget, expenses, and incomes

  try {
    const budgetData = await Budget.findAll(); //*TBC

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
    });
  } catch (err) {}
});

//!Adding something to budget/income/expense
router.get('/add/:type', withAuth, async (req, res) => {
  console.log(req.params.type);
  try {
    res.render('add', {
      loggedIn: req.session.loggedIn,
      check: req.params.type,
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

module.exports = router;
