const express = require("express");
const path = require("path");
const homeRouter = require("./routes/home");
const usersRouter = require("./routes/users");

const app = express();
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(usersRouter);
app.use(homeRouter);

app.listen(3000);
