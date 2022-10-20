const { Income } = require('../models');

const incomedata = [
  {
    name: 'Jeremy',
    amount: 4500,
    household_id: 1,
  },
  {
    name: 'Janet',
    amount: 3500,
    household_id: 1,
  },
  {
    name: 'John',
    amount: 3000,
    household_id: 2,
  },
  {
    name: 'Jessica',
    amount: 4000,
    household_id: 2,
  },
  {
    name: 'James',
    amount: 2500,
    household_id: 3,
  },
  {
    name: 'Nicole',
    amount: 4500,
    household_id: 3,
  },
];

const seedIncome = () => Income.bulkCreate(incomedata);

module.exports = seedIncome;
