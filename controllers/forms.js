const router = require("express").Router();

router.get("/", async (req, res) => {
  // TODO: Render template with Sequelize data
  res.render("homepage");
});

router.get("/home", function (req, res) {
  res.render("homepage", { layout: "main" });
});

router.get("/backend", function (req, res) {
  res.render("homepage", { layout: "backEnd" });
});

router.get("/signup", function (req, res) {
  res.render("signUpForm", { layout: "backEnd" });
});

router.get("/calculator", function (req, res) {
  res.render("calorieCalculator", { layout: "backEnd" });
});

module.exports = router;
