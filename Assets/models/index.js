const router = require('../controllers');
const User = require('./User');
const Household = require('./Household');
const Expenses = require('./Expenses');

//*this is where we will link models together
//*eg, Picture.belongsTo(Phone)

module.exports = { User }