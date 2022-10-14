const router = require('express').Router();
const apiRoutes = require('./api');
<<<<<<< HEAD
const homeRoutes = require('./');
const editRoutes = require('./edit-routes');
const viewAllRoutes = require('./viewAll-routes');
=======
const homeRoutes = require('./home-routes.js');
const editRoutes = require('./edit-routes.js');
const viewAllRoutes = require('./viewAll-routes.js');
>>>>>>> origin

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/edit', editRoutes);
router.use('/view', viewAllRoutes);

module.exports = router;
