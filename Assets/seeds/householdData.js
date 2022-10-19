const { Household } = require('../models');

const householddata = [
  {
    name: 'The Martens',
    user_id: 1,
  },
  {
    name: 'The Parsons',
    user_id: 2,
  },
  {
    name: 'The Waldens',
    user_id: 3,
  },
];

const seedHousehold = () => Household.bulkCreate(householddata);

module.exports = seedHousehold;
