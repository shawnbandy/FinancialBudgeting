const router = require('express').Router();
const sequelize = require('../config/connection');
const {
  Budget,  
  Expenses,
  Household,
  Income,
  User,
} = require('../models');
const withAuth = require('../utils/auth');

//!edit income
router.get('/income/:id', withAuth, async (req, res) => {
  try {
    const incomeData = await Income.findByPk(req.params.id, {
      where: {
        id: req.params.id,
      },
    });

    const income = incomeData.get({ plain: true });

    res.render('edit', {
      income,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

//!edit expense
router.get('/expense/:id', withAuth, async (req, res) => {
  try {
    const expenseData = await Expenses.findByPk(req.params.id, {
      where: {
        id: req.params.id,
      },
    });

    const expense = expenseData.get({ plain: true });

    res.render('edit', {
      expense,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

//!edit budget
router.get('/budget/:id', withAuth, async (req, res) => {
  try {
    const budgetData = await Budget.findByPk(req.params.id, {
      where: {
        id: req.params.id,
      },
    });

    const budget = budgetData.get({ plain: true });

    res.render('edit', {
      budget,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});


module.exports = router;

