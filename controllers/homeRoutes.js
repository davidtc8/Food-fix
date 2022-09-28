const router = require("express").Router();

router.get("/home", async (req, res) => {
  res.render("homepage", { layout: "main" });
});

router.get("/backend", async (req, res) => {
  res.render("homepage", { layout: "backend" });
});

module.exports = router;
