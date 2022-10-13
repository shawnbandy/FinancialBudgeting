
const { Expenses } = require('../models');

const expensesdata =
[
  {
    "name": "mcdonalds",   
    "amount": 5.50,    
    "budget_id": 3,
  },
  {
    "name": "power_bill",   
    "amount": 200,    
    "budget_id": 2,
  },
  {
    "name": "car_payment",   
    "amount": 320.65,    
    "budget_id": 1,
  },
  {
    "name": "power",   
    "amount": 750,    
    "budget_id": 5,
  },
  {
    "name": "new_shirt",   
    "amount": 40,    
    "budget_id": 6,
  },
  {
    "name": "rent",   
    "amount": 1200,    
    "budget_id": 4,
  },
  {
    "name": "utilities",   
    "amount": 200,    
    "budget_id": 8,
  },
  {
    "name": "car_payment",   
    "amount": 522.75,    
    "budget_id": 7,
  },
  {
    "name": "peloton",   
    "amount":1000,    
    "budget_id": 9,
  },
 
  
  
];

const seedExpenses = () => Expenses.bulkCreate(expensesdata);

module.exports = seedExpenses;