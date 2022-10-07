const router = require('../controllers');
const User = require('./User');
const Household = require('./Household');
const Expenses = require('./Expenses');
const Income = require('./Income');
const Budget = require('./Budget');
const BudgetExpenses = require('./BudgetExpenses')

// *this is where we will link models together
// *eg, Picture.belongsTo(Phone)

User.hasOne(Household, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
  
Household.hasMany(Income, {
  foreignKey: 'household_id',
  onDelete: 'CASCADE',
});  
  
Household.hasMany(Expenses, {
  foreignKey: 'household_id',
  onDelete: 'CASCADE',
});
Household.hasMany(Budget, {
  foreignKey: 'household_id',
  onDelete: 'CASCADE',
});
Household.belongsTo(User, {
  foreignKey: 'user_id',
});
  
Income.belongsTo(Household, {
  foreignKey: 'household_id',
});
Expenses.belongsTo(Household, {
  foreignKey: 'household_id',
});
Budget.belongsTo(Household, {
  foreignKey: 'household_id',
});
Budget.belongsToMany(Expenses, {
  through: BudgetExpenses,
  foreignKey: "budget_id",
});
Expenses.belongsToMany(Budget, {
  through: BudgetExpenses,
  foreignKey: "expenses_id,"
})


module.exports = { User, Household, Income, Expenses, Budget, BudgetExpenses };