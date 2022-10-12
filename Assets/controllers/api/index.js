const router = require('express').Router();

const { Router } = require('express');
//*this is where we link the routers with other parts of api
//*eg, router.use('/location', locationRoutes)
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes)

module.exports = router;