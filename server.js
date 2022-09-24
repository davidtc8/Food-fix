//required modules and packages
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");
const dotenv = require("dotenv").config();
//creates an express instance called app, to be used for several express operations.
const app = express();
const PORT = process.env.PORT || 3001;
//Setting up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
// informs express.js on which template engine to use.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Translating data to json and the urlencoded to string value type.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);
//forces sequelize to sync on every attempt. force: true adds a DROP TABLE IF EXISTS before trying to create the table -
//if you force, existing tables will be overwritten.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on port: " + PORT));
});
