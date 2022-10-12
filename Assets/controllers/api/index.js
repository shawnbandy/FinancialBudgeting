const router = require('express').Router();
const householdRoutes = require('./householdRoutes');
//*this is where we link the routers with other parts of api
//*eg, router.use('/location', locationRoutes)
router.use('/household', householdRoutes);

module.exports = router;