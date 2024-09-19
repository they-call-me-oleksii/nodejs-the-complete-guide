const express = require("express");
const users = require("../users");

const Router = express.Router();

Router.get("/users", (_req, res, _next) => {
  res.render("users", {
    pageTitle: "Users",
    users,
  });
});

Router.post("/create-user", (req, res, _next) => {
  const newUserName = req.body.username;
  users.push({ name: newUserName });
  res.status(301).redirect("./users");
});

module.exports = Router;
