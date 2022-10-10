const router = require('express').Router();
const expenseRoutes = require('./expense-routes.js');
const incomeRoutes = require('./income-routes');

//*this is where we link the routers with other parts of api
//*eg, router.use('/location', locationRoutes)

router.use('/income', incomeRoutes);
router.use('/expense', expenseRoutes);

module.exports = router;
