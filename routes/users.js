const express = require("express");
const path = require("path");
const rootPath = require("../utils/rootPath");

const Router = express.Router();

Router.get("/users", (_req, res, _next) => {
  res.sendFile(path.join(rootPath, "views", "users.html"));
});

module.exports = Router;
