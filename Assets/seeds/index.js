const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedHousehold = require('./householdData');
const seedIncome = require('./incomeData');
const seedExpenses = require('./expensesData');
const seedBudget = require('./budgetData');
const seedBudgetExpenses = require('./budgetexpensesData');

//Seed the database; user first, then household, then income and finally expenses
const seedAll = async () => {
  await sequelize.sync({ force: true });    

  await seedUser();

  await seedHousehold();

  await seedIncome();

  await seedBudget();

  await seedExpenses();

  await seedBudgetExpenses();

  process.exit(0);
};

seedAll();