//User seed data
const { User } = require('../models');

const userdata = [
  {
    username: 's@c.com',
    password: 'root',
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
  });

module.exports = seedUser;
