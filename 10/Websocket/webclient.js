const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:3000");

ws.on("open", () => {
    console.log("Connected to server");
    ws.send("Hello from client");
});

ws.on("message", (msg) => {
    console.log("Server says:", msg.toString());
});

ws.on("close", () => {
    console.log("Connection closed");
});
