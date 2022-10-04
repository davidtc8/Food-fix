const router = require("express").Router();
const { Sequelize } = require("sequelize");
const sequelize = require("../config/connection");
const breakfast = require("../models/breakfast");
const Sides = require("../models/sides");
const Meals = require("../models/meal");

// route to get all breakfasts
//
// router.get("/menuss", async (req, res) => {
//   const breakfastData = await breakfast.findAll().catch((err) => {
//     res.json(err);
//   });
//   const breakfasts = breakfastData.map((breakfast) =>
//     breakfast.get({ plain: true })
//   );

//   res.render("menus", {
//     renderBreakfast: breakfasts,
//     layout: "menuBackground",
//   });
// });

//randomizer

router.get("/", async (req, res) => {
  try {
    const breakfastData = await breakfast.findAll({
      order: Sequelize.literal("rand()"),
      limit: 1,
    });
    const breakfastList = breakfastData.map((random) =>
      random.get({ plain: true })
    );

    const sidesData = await Sides.findAll({
      order: Sequelize.literal("rand()"),
      limit: 1,
    });
    const sidesList = sidesData.map((random) => random.get({ plain: true }));

    const mealsData = await Meals.findAll({
      order: Sequelize.literal("rand()"),
      limit: 1,
    });
    const mealsList = mealsData.map((random) => random.get({ plain: true }));

    res.render("menus", {
      renderFast: breakfastList,
      renderSides: sidesList,
      renderMeals: mealsList,
      layout: "menuBackground",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
