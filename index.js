const http = require("http");

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  res.appendHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write(`<head><title>hello on ${url}</title><head>`);
  res.write("<body>");

  switch (url) {
    case "/": {
      res.write("<h1>Greeting fellows!</h1>");
      res.write(
        "<form action='/create-user' method='post'><input name='username'/><button type='submit'>Submit</button></form>"
      );

      break;
    }

    case "/users": {
      res.write("<ol>");
      for (let i = 0; i < 10; i++) {
        res.write(`<li>User ${i + 1}</li>`);
      }
      res.write("</ol>");
      break;
    }

    case "/create-user": {
      const buffer = [];
      req.on("data", (chunk) => {
        buffer.push(chunk);
      });
      req.on("end", () => {
        const parsed = Buffer.concat(buffer).toString();
        const username = parsed.split("=")[1];
        console.log({ username });
      });
      break;
    }

    default:
      break;
  }

  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
