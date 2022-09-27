const router = require("express").Router();
const homeRoutes = require("./mealsRoutes");
const forms = require("./forms");

router.use("/", homeRoutes);
router.use("/", forms);

module.exports = router;
