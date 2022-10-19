const { Expenses } = require('../models');

const expensesdata = [
  {
    name: 'mcdonalds',
    amount: 5.5,
    budget_id: 2,
    household_id: 1,
  },
];

const seedExpenses = () => Expenses.bulkCreate(expensesdata);

module.exports = seedExpenses;
