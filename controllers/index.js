const router = require('../routes/api/index.js');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);