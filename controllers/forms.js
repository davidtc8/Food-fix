const router = require("express").Router();

router.get("/signup", async (req, res) => {
  res.render("signUpForm", { layout: "backEnd" });
});

router.get("/calculator", async (req, res) => {
  res.render("calorieCalculator", { layout: "counter" });
});

module.exports = router;

// router.get('/', async (req, res) => {
//   const dishData = await Dish.findAll().catch((err) => {
//       res.json(err);
//     });
//       const dishes = dishData.map((dish) => dish.get({ plain: true }));
//       res.render('all', { dishes });
//     });
