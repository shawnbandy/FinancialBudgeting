//User seed data
const { User } = require('../models');

const userdata =
[
  {
    "username": "jamesdk",
    "password": "password12",
  },
  {
    "username": "jackpd",
    "password": "password123",
  },
  {
    "username": "janetpr",
    "password": "password1234",
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,  
});

module.exports = seedUser;