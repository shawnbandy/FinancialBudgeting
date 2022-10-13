const router = require('express').Router();
const sequelize = require('../config/connection');
const {
  Budget,
  BudgetExpenses,
  Expenses,
  Household,
  Income,
  User,
} = require('../models');
const withAuth = require('../utils/auth');

//!view all income
router.get('/income', withAuth, async (req, res) => {
  try {
    const incomeData = await Income.findAll({});
    const incomeArr = incomeData.map((content) => content.get({ plain: true }));
    const incomeRev = incomeArr.reverse();

    res.render('viewAll', {
      incomeRev, //!
    });
  } catch (err) {}
});

//!view all expenses
router.get('/expenses', withAuth, async (req, res) => {
  try {
    const expenseData = await expense.findAll({});
    const expenseArr = expenseData.map((content) =>
      content.get({ plain: true })
    );
    const expenseRev = expenseArr.reverse();

    res.render('viewAll', {
      expenseRev,
    });
  } catch (err) {}
});

module.exports = router;
