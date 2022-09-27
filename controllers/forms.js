const router = require("express").Router();

router.get("/home", async (req, res) => {
  res.render("homepage", { layout: "main" });
});

router.get("/backend", async (req, res) => {
  res.render("homepage", { layout: "backend" });
});

router.get("/signup", async (req, res) => {
  res.render("signUpForm", { layout: "backEnd" });
});

router.get("/calculator", async (req, res) => {
  res.render("calorieCalculator", { layout: "counter" });
});

module.exports = router;
