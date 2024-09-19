const express = require("express");
const path = require("path");
const rootPath = require("../utils/rootPath");

const Router = express.Router();

Router.get("/", (_req, res, _next) => {
  res.render("home", {
    pageTitle: "Home",
  });
});

module.exports = Router;
