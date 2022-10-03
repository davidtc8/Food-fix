const router = require("express").Router();
const User = require("../../models/user");
const User_plan = require("../../models/user_plan");

// Route for creating a new user
router.post("/", async (req, res) => {
  try {

    const dbUserData = await User.create({
      name: req.body.user_name,
      email: req.body.user_email,
      password: req.body.user_password

    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.email = req.body.user_email;
      res.status(200).json(dbUserData);
    });


  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.user_email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.user_password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.email = req.body.user_email;
      console.log(
        "🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie",
        req.session.cookie,
        // req.session
      );

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });

    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// 

router.post("/plan", async (req, res) => {
  try {

    let dbUserData;

    const userId = await User.findOne({
      where: { email: req.session.email },
      attributes: ['id']
    });

    const existing = await User_plan.findOne({
      where: { user_id: userId.id }
    });

    console.log('\n<<<<<<<<<', userId.get({ plain: true }), existing, '>>>>>>\n')

    if (existing) {

      dbUserData = await User_plan.update(
        {
          age: req.body.age,
          gender: req.body.gender,
          weight: req.body.weight,
          height: req.body.height,
          activity: req.body.activity,
          goal: req.body.goal,
          protein: req.body.protein,
          fat: req.body.fat,
          carbs: req.body.carbs,
          calories: req.body.calories,
          user_id: userId.id
        },
        { where: { user_id: userId.id } }

      );


    } else {

      dbUserData = await User_plan.create({
        age: req.body.age,
        gender: req.body.gender,
        weight: req.body.weight,
        height: req.body.height,
        activity: req.body.activity,
        goal: req.body.goal,
        protein: req.body.protein,
        fat: req.body.fat,
        carbs: req.body.carbs,
        calories: req.body.calories,
        user_id: userId.id
      });
    }

    res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// Logout

router.post("/logout", (req, res) => {
  variable = req.session.loggedIn
  console.log('\n\nfrefrefrefre', variable, req.session)
  res.status(200).json(req.session)


  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });

  } else {
    res.status(404).end();
  }
});



router.get('/session', (req, res) => {



  res.status(200).json({ email: req.session.email });


})

module.exports = router;
