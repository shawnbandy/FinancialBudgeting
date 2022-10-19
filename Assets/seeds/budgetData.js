const { Budget } = require('../models');

const budgetdata = [
  {
    name: 'rent',
    amount: 1200,
    household_id: 1,
  },
  {
    name: 'utilities',
    amount: 200,
    household_id: 1,
  },
  {
    name: 'miscellaneous',
    amount: 250,
    household_id: 1,
  },

  {
    name: 'rent',
    amount: 1200,
    household_id: 2,
  },
  {
    name: 'utilities',
    amount: 200,
    household_id: 2,
  },
  {
    name: 'miscellaneous',
    amount: 250,
    household_id: 2,
  },
  {
    name: 'rent',
    amount: 1200,
    household_id: 3,
  },
  {
    name: 'utilities',
    amount: 200,
    household_id: 3,
  },
  {
    name: 'miscellaneous',
    amount: 250,
    household_id: 3,
  },
];

const seedBudget = () => Budget.bulkCreate(budgetdata);

module.exports = seedBudget;
