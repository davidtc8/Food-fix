const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const forms = require("./forms");

router.use("/", homeRoutes);
router.use("/", forms);
router.use("/api", apiRoutes);

module.exports = router;
