const express = require("express");

const app = express();
const router = express.Router();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

const users = Array.from({ length: 5 }, (_v, i) => ({
  username: `User ${i + 1}`,
}));

const writeStartOfHTML = (res, url = "") => {
  res.write("<html>");
  res.write(`<head><title>hello on ${url}</title><head>`);
  res.write("<body>");
  res.write("<main>");
};

const writeEndOfHTML = (res) => {
  res.write("</main>");
  res.write("</body>");
  res.write("</html>");
};

router.use((req, _res, next) => {
  const { url } = req;

  console.log(url);

  next();
});

router.get("/", (req, res) => {
  const { url } = req;
  console.log(url);
  writeStartOfHTML(res, url);

  res.write("<h1>Greeting fellows!</h1>");
  res.write(
    "<form action='/create-user' method='post'><input name='username'/><button type='submit'>Submit</button></form>"
  );

  writeEndOfHTML(res);
  res.end();
});

router.get("/users", (req, res) => {
  const { url } = req;
  writeStartOfHTML(res, url);

  res.write("<ol>");

  for (let i = 0; i < users.length; i++) {
    res.write(`<li>${users[i].username}</li>`);
  }

  res.write("</ol>");

  writeEndOfHTML(res);
  res.end();
});

router.post("/create-user", (req, res) => {
  users.push({ username: req.body.username });

  res.redirect(301, "/users");
});

app.use("/", router);
app.listen(3000);
