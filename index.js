const express = require("express");
const path = require("path");
const homeRouter = require("./routes/home");
const usersRouter = require("./routes/users");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(usersRouter);
app.use(homeRouter);
app.use((_req, res, _next) => {
  res.status(404).render("404", { pageTitle: "404" });
});

app.listen(3000);
