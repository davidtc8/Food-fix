const router = require("express").Router();

router.get("/", async (req, res) => {
  // TODO: Render template with Sequelize data
  res.render("homepage");
});

router.get("/home", function (req, res) {
  res.render("homepage", { layout: "main" });
});

router.get("/signup", function (req, res) {
  res.render("signUpForm", { layout: "backEnd" });
});

router.get("/calculator", function (req, res) {
  res.render("calculator", { layout: "backend" });
});

module.exports = router;

// router.get('/', async (req, res) => {
//   const dishData = await Dish.findAll().catch((err) => {
//       res.json(err);
//     });
//       const dishes = dishData.map((dish) => dish.get({ plain: true }));
//       res.render('all', { dishes });
//     });
