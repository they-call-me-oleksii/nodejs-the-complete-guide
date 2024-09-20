const express = require("express");

const Router = express.Router();

Router.get("/", (_req, res, _next) => {
  res.render("home", {
    pageTitle: "Home",
  });
});

module.exports = Router;
