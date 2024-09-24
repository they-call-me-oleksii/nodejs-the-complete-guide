const express = require("express");
const User = require("../models/user");

const Router = express.Router();

Router.get("/users", (_req, res, _next) => {
  const users = User.fetchAll();
  res.render("users", {
    pageTitle: "Users",
    users,
  });
});

Router.post("/create-user", (req, res, _next) => {
  const newUserName = req.body.username;

  if (newUserName) {
    const newUser = new User(newUserName);
    newUser.save();
  }

  res.status(200).end();
});

module.exports = Router;
