// websocket server 
const{WebSocketServer} = require("ws") 

const wss = new WebSocketServer({port:3000})
wss.on("connection", (ws)=>{
    console.log("client connected")
    // triger when server msg from client
    ws.on("message",(message)=>{
        console.log("Received msg: ", message.toString())
        ws.send("hello from websocket server")
    })
    ws.on("close", ()=>{
        console.log("client disconneted")
    })
})
