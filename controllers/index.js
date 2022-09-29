
const router = require("express").Router();

const apiRoutes = require("./api");
const forms = require("./forms");

router.use("/", forms);
router.use("/api", apiRoutes);

module.exports = router;
