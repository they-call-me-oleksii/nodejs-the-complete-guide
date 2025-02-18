const express = require("express");
const path = require("path");
const homeRouter = require("./routes/home");
const usersRouter = require("./routes/users");
const { errorController } = require("./controllers/error");

const PORT = process.env.BACKEND_PORT || 3000;
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(usersRouter);
app.use(homeRouter);
app.use(errorController);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
