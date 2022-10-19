const { Household } = require('../models');

const householddata = [
  {
    name: 'default',
    user_id: 1,
  },
];

const seedHousehold = () => Household.bulkCreate(householddata);

module.exports = seedHousehold;
