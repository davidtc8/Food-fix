const router = require("express").Router();
const Breakfast = require('../models/breakfast');
const Soups = require('../models/soups');
const Meal = require('../models/meal');
const Sides = require('../models/sides');
const Desserts = require('../models/desserts');



router.get("/", function (req, res) {
  res.render("homepage", { layout: "main" });
});

router.get("/signup", function (req, res) {
  res.render("signUpForm", { layout: "backgrounds" });
});

router.get("/login", function (req, res) {
  res.render("login", { layout: "backEnd" });
});


router.get("/calculator", function (req, res) {
  res.render("calculator", { layout: "backgrounds" });
});


router.get('/menu', async (req, res) => {
  try {

    const breakfastData = await Breakfast.findAll({ exclude: ['equivalent_composition'] });
    const breakfastList = breakfastData.map((dish) => dish.get({ plain: true }));

    const soupsData = await Soups.findAll({ exclude: ['equivalent_composition'] });
    const soupsList = soupsData.map((dish) => dish.get({ plain: true }));

    const mealData = await Meal.findAll({ exclude: ['equivalent_composition'] });
    const mealList = mealData.map((dish) => dish.get({ plain: true }));

    const sidesData = await Sides.findAll({ exclude: ['equivalent_composition'] });
    const sidesList = sidesData.map((dish) => dish.get({ plain: true }));

    const dessertsData = await Desserts.findAll({ exclude: ['equivalent_composition'] });
    const dessertsList = dessertsData.map((dish) => dish.get({ plain: true }));

    // const array = [breakfastList, soupsList, mealList, sidesList, dessertsList]

    res.render("menu", {
      renderBreakfast: breakfastList,
      renderSoups: soupsList,
      renderMeal: mealList,
      renderSides: sidesList,
      renderDesserts: dessertsList,
      layout: "menuLayout"
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});




module.exports = router;

