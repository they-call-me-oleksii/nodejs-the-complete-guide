const express = require("express");

const Router = express.Router();

Router.get("/", (_req, res, _next) => {
  res.render("home", {
    pageTitle: "Home",
  });
});

Router.get("/login", (_req, res, _next) => {
  res.render("login", {
    pageTitle: "Login",
  });
});

module.exports = Router;
