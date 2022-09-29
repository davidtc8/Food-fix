const router = require("express").Router();

router.get("/home", async (req, res) => {
  res.render("homepage", { layout: "main" });
});

module.exports = router;
