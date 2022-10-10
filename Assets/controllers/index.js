const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

//*need a homeroute

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
