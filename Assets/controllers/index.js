const router = require('express').Router();
const apiRoutes = require('./api');

//*need a homeroute

router.use('/api', apiRoutes);

module.exports = router;