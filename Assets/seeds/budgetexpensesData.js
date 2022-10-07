
const { BudgetExpenses } = require('../models');

const budgetexpensesdata =
[
  {
    budget_id: 5,    
    expenses_id: 1,
  },
  {
    budget_id: 2,    
    expenses_id: 2,
  },
  {
    budget_id: 3,    
    expenses_id: 3,
  },
  {
    budget_id: 1,    
    expenses_id: 4,
  },
  {
    budget_id: 4,    
    expenses_id: 5,
  },
  {
    budget_id: 6,    
    expenses_id: 10,
  },
  {
    budget_id: 7,    
    expenses_id: 9,
  },
  {
    budget_id: 8,    
    expenses_id: 8,
  },
  {
    budget_id: 9,    
    expenses_id: 7,
  },
  {
    budget_id: 10,    
    expenses_id: 6,
  },
  {
    budget_id: 11,    
    expenses_id: 15,
  },
  {
    budget_id: 12,    
    expenses_id: 14,
  },
  {
    budget_id: 13,    
    expenses_id: 13,
  },
  {
    budget_id: 14,    
    expenses_id: 12,
  },
  {
    budget_id: 15,    
    expenses_id: 11,
  },
  
];

const seedBudgetExpenses = () => BudgetExpenses.bulkCreate(budgetexpensesdata);

module.exports = seedBudgetExpenses;