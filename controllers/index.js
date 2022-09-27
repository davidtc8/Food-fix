const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const forms = require("./forms");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/", forms);
router.use("/api", apiRoutes);

module.exports = router;
