const router = require("express").Router();
const User = require("../../models/user");

// Route for creating a new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      name: req.body.user_name,
      email: req.body.user_email,
      password: req.body.user_password

    });

    console.log('req.body.user_email', req.body.user_email)

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// console.log(' req.body.user_email', req.body.user_email, req.body.user_password)
// Login
router.post("/login", async (req, res) => {
  try {
    console.log('\n\n req.body.user_email\n\n', req.body, req.body)
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
      // req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;
      console.log(
        "🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie",
        req.session.cookie,
        req.session
      );

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });

      // document.location.replace("http://localhost:3001/clculator");
    });
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


  // if (req.session.loggedIn) {
  //   req.session.destroy(() => {
  //     res.status(204).end();
  //   });
  // } else {
  //   res.status(404).end();
  // }
});

module.exports = router;
