const router = require("express").Router();

const userRoutes = require("./user-routes");
const queries = require('./queries');

router.use("/user", userRoutes);
router.use('/query', queries)

module.exports = router;
