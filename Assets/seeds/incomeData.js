const { Income } = require('../models');

const incomedata = [
  {
    name: 'Shawn',
    amount: 4500,
    household_id: 1,
  },
  {
    name: 'Joe',
    amount: 3500,
    household_id: 1,
  },
];

const seedIncome = () => Income.bulkCreate(incomedata);

module.exports = seedIncome;
