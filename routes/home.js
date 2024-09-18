const express = require("express");
const path = require("path");
const rootPath = require("../utils/rootPath");

const Router = express.Router();

Router.get("/", (_req, res, _next) => {
  res.sendFile(path.join(rootPath, "views", "home.html"));
});

module.exports = Router;
