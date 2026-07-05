// create a websocket server using socket.io
const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index1.html");
});

io.on("connection", (socket) => {
  console.log("A new User has connected" , socket.id);
  
  socket.on("usermessage", (msg) => {
    console.log("A new user msg" , msg)
    io.emit("message", msg);// broadcast msg to all the connected clients
  });
});

server.listen(3000, () => console.log("Server running on 3000"));