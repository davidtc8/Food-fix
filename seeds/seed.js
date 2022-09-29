const sequelize = require("../config/connection");
// const { Beverages, Breakfast, Desserts } = require('../models');
const Breakfast = require("../models/Breakfast");
const Desserts = require("../models/desserts");
const Meal = require("../models/meal");
const Sides = require("../models/sides");
const Soups = require("../models/soups");
const breakfastart = require("../models/breakfastart");

const breakfastSeedData = require("./breakfast.json");
const dessertsSeedData = require("./desserts.json");
const mealSeedData = require("./meal.json");
const sidesSeedData = require("./sides.json");
const soupsSeedData = require("./soups.json");
const breakfastArtData = require("./breakfastart.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Breakfast.bulkCreate(breakfastSeedData, {
    individualHooks: true,
    returning: true,
  });

  await breakfastArtData.bulkCreate(breakfastSeedData, {
    individualHooks: true,
    returning: true,
  });

  await Desserts.bulkCreate(dessertsSeedData, {
    individualHooks: true,
    returning: true,
  });

  await Meal.bulkCreate(mealSeedData, {
    individualHooks: true,
    returning: true,
  });

  await Sides.bulkCreate(sidesSeedData, {
    individualHooks: true,
    returning: true,
  });

  await Soups.bulkCreate(soupsSeedData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
