const router = require("express").Router();
const breakfast = require("../models/Breakfast");

// route to get all breakfasts
//
router.get("/", async (req, res) => {
  const breakfastData = await breakfast.findAll().catch((err) => {
    res.json(err);
  });
  const breakfasts = breakfastData.map((breakfast) =>
    breakfast.get({ plain: true })
  );
  res.render("menus", { breakfasts });
});

// route to get one dish
router.get("/menus/:id", async (req, res) => {
  try {
    const breakfastData = await breakfast.findByPk(req.params.id);
    if (!dishData) {
      res.status(404).json({ message: "No breakfast with this id!" });
      return;
    }
    const breakfast = breakfastData.get({ plain: true });
    res.render("dish", dish);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// const { Breakfast, breakfastart } = require("../models/");

// GET all breakfasts for homepage
// router.get("/menus", async (req, res) => {
//   try {
//     const dbBreakfastData = await Breakfast.findAll({
//       include: [
//         {
//           model: breakfastart,
//           attributes: ["name", "cal"],
//         },
//       ],
//     });

//     const breakfasts = dbBreakfastData.map((breakfast) =>
//       breakfast.get({ plain: true })
//     );

//     res.render("menus", {
//       breakfasts,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// router.get("/breakfast/:id", async (req, res) => {
//   try {
//     const dbBreakfastData = await Breakfast.findByPk(req.params.id, {
//       include: [
//         {
//           model: breakfastart,
//           attributes: ["id", "filename", "breakfast_id"],
//         },
//       ],
//     });

//     const breakfast = dbBreakfastData.get({ plain: true });
//     res.render("breakfasts", { breakfast });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // GET one breakfast image
// router.get("/breakfastone/:id", async (req, res) => {
//   try {
//     const dbBreakfastData = await breakfastart.findByPk(req.params.id);

//     const breakfast = dbBreakfastData.get({ plain: true });

//     res.render("breakfastImage", { breakfast });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
