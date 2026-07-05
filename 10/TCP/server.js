//  tcp server 

const net = require("net") 
const server= net.createServer((socket)=>{
    console.log("client connected")
    socket.write("hello client")
    socket.on("data",(data)=>{
        console.log("Received msg: ", data.toString())
    })
    socket.on("end",()=>{
        console.log("client disconneted")
    })
})

server.listen(3000);