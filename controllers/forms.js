const router = require("express").Router();
const Breakfast = require("../models/breakfast");
const Soups = require("../models/soups");
const Meal = require("../models/meal");
const Sides = require("../models/sides");
const Desserts = require("../models/desserts");
const { User, User_plan } = require("../models");

router.get("/", function (req, res) {
  res.render("homepage", { layout: "main" });
});

router.get("/signup", function (req, res) {
  res.render("signUpForm", { signup: true, layout: "backgrounds" });
});

router.get("/login", function (req, res) {
  res.render("logIn", { login: true, layout: "backgrounds" });
});

router.get("/calculator", function (req, res) {
  res.render("calculator", { layout: "backgrounds", loggedIn: req.session.loggedIn, active: true });
});

router.get("/menu", async (req, res) => {
  try {

    currentSession = { logEmail: req.session.email }

    if (currentSession.logEmail) {

      const userObjective = await User.findOne({
        where: { email: req.session.email },
        include: [{
          model: User_plan,
          attributes: ['protein', 'fat', 'carbs', 'calories'],
        }]
      })

      const objectiveList = userObjective.get({ plain: true });


      const breakfastData = await Breakfast.findAll({
        exclude: ["equivalent_composition"],
      });
      const breakfastList = breakfastData.map((dish) =>
        dish.get({ plain: true })
      );

      const soupsData = await Soups.findAll({
        exclude: ["equivalent_composition"],
      });
      const soupsList = soupsData.map((dish) => dish.get({ plain: true }));

      const mealData = await Meal.findAll({
        exclude: ["equivalent_composition"],
      });
      const mealList = mealData.map((dish) => dish.get({ plain: true }));

      const sidesData = await Sides.findAll({
        exclude: ["equivalent_composition"],
      });
      const sidesList = sidesData.map((dish) => dish.get({ plain: true }));

      const dessertsData = await Desserts.findAll({
        exclude: ["equivalent_composition"],
      });
      const dessertsList = dessertsData.map((dish) => dish.get({ plain: true }));

      const object = {
        renderBreakfast: breakfastList,
        renderSoups: soupsList,
        renderMeal: mealList,
        renderSides: sidesList,
        renderDesserts: dessertsList,
        userObjective: objectiveList["user_plan"],
        logEmail: req.session.email,
        layout: "menuLayout",
      }

      console.log(object.renderBreakfast)
      console.log(object.renderSoups)
      console.log(object.renderMeal)
      console.log(object.renderSides)
      console.log(object.renderDesserts)
      res.render("menuAdd", object);

    } else {
      res.render("menuAdd", { layout: "menuLayout", logEmail: req.session.email })
    }


  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get("/objetivo", async (req, res) => {

  const userObjective = await User.findOne({
    where: { email: req.session.email },
    exclude: ['name', 'password', 'email'],
    include: [{
      model: User_plan,
      attributes: ['protein', 'fat', 'carbs', 'calories'],
    }],

  })
  const objectiveList = userObjective.map((goal) => goal.get({ plain: true }));

  console.log('\n<<<--->>>', objectiveList, '\n<<<--->>>\n\n')

  res.status(200).json(objectiveList)


});



module.exports = router;
