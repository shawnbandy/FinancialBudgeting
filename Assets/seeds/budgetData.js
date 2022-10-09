
const { Budget } = require('../models');

const budgetdata =
[
  {
    "name": "rent",   
    "amount": 1200,    
    "household_id": 1,
  },
  {
    "name": "utilities",   
    "amount": 200,    
    "household_id": 1,
  },
  {
    "name": "loan",   
    "amount": 320.65,    
    "household_id": 1,
  },
  {
    "name": "miscellaneous",   
    "amount": 250,    
    "household_id": 1,
  },
  {
    "name": "food",   
    "amount": 300,    
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

const seedBudget = () => Budget.bulkCreate(budgetdata);

module.exports = seedBudget;