// Import the built-in HTTP module
const http = require("http");

const server = http.createServer((req, res) => {


  if (req.url === "/home") {
    res.end("<h1>Hello and Welcome to Node.js!</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>This is the About Page</h1>");
  } else {
    res.end(`<a href="/home">Home</a>`);
  }
})


server.listen(3000, "127.0.0.1", () => {
  console.log("listening to Port");
});
