const router = require('express').Router();
const expenseRoutes = require('./expense-routes.js');
const incomeRoutes = require('./income-routes.js');
const budgetRoutes = require('./budget-route.js');
const hhRoutes = require('./household-route');

//*this is where we link the routers with other parts of api
//*eg, router.use('/location', locationRoutes)
const userRoutes = require('./userRoutes');

router.use('/income', incomeRoutes);
router.use('/expense', expenseRoutes);
router.use('/user', userRoutes);
router.use('/budget', budgetRoutes);
router.use('/household', hhRoutes);

module.exports = router;
