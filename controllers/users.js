const User = require("../models/user");

exports.getUsers = (_req, res, _next) => {
  const users = User.fetchAll();
  res.render("users", {
    pageTitle: "Users",
    users,
  });
};

exports.getUser = (req, res, _next) => {
  const { userId } = req.params;
};

exports.createUser = (req, res, _next) => {
  const newUserName = req.body.username;

  if (newUserName) {
    const newUser = new User(newUserName);
    newUser.save();
  }

  res.status(200).end();
};
