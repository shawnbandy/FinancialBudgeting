const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const editRoutes = require('./edit-routes');
const viewAllRoutes = require('./viewAll-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/edit', editRoutes);
router.use('/view', viewAllRoutes);

module.exports = router;
