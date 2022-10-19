const { Budget } = require('../models');

const budgetdata = [
  {
    name: 'rent',
    amount: 1500,
    household_id: 1,
  },

  {
    name: 'Food',
    amount: 600,
    household_id: 1,
  },
];

const seedBudget = () => Budget.bulkCreate(budgetdata);

module.exports = seedBudget;
