const express = require("express");
const { getUsers, createUser } = require("../controllers/users");

const Router = express.Router();

Router.get("/users", getUsers);

Router.post("/create-user", createUser);

module.exports = Router;
