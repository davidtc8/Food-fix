const router = require("express").Router();
const apiRoutes = require("./api");
const forms = require("./forms");
const menus = require("./menus");

router.use("/", menus);
router.use("/", forms);
router.use("/api", apiRoutes);



module.exports = router;
