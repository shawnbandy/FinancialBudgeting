
const { Expenses } = require('../models');

const expensesdata =
[
  {
    "name": "mcdonalds",   
    "amount": 5.50,    
    "household_id": 1,
  },
  {
    "name": "power_bill",   
    "amount": 200,    
    "household_id": 1,
  },
  {
    "name": "car_payment",   
    "amount": 320.65,    
    "household_id": 1,
  },
  {
    "name": "condo_rent",   
    "amount": 750,    
    "household_id": 1,
  },
  {
    "name": "new_shirt",   
    "amount": 40,    
    "household_id": 1,
  },
  {
    "name": "rent",   
    "amount": 1200,    
    "household_id": 2,
  },
  {
    "name": "utilities",   
    "amount": 200,    
    "household_id": 2,
  },
  {
    "name": "car_payment",   
    "amount": 522.75,    
    "household_id": 2,
  },
  {
    "name": "miscellaneous",   
    "amount": 250,    
    "household_id": 2,
  },
  {
    "name": "food",   
    "amount": 300,    
    "household_id": 2,
  },
  {
    "name": "rent",   
    "amount": 1200,    
    "household_id": 3,
  },
  {
    "name": "utilities",   
    "amount": 200,    
    "household_id": 3,
  },
  {
    "name": "peleton",   
    "amount": 954.59,    
    "household_id": 3,
  },
  {
    "name": "miscellaneous",   
    "amount": 250,    
    "household_id": 3,
  },
  {
    "name": "food",   
    "amount": 300,    
    "household_id": 3,
  },
  
];

const seedExpenses = () => Expenses.bulkCreate(expensesdata);

module.exports = seedExpenses;