const router = require('express').Router();
const homeRoutes = require('./mealsRoutes');

router.use('/', homeRoutes);

module.exports = router;