// 1st methodf using res.end()
// const http = require("http")
// const server = http.createServer((req, res)=> {
//     res.end("hello world and welcome to NOdejs")
// })
// server.listen(8000, "127.10.10.1" , ()=>{
//     console.log("listening to port")
// })



// 2nd method 
const http= require("http")
const server = http.createServer((req,res)=>{
    res.write("hello everyone,welcome to lpu")
    res.end()
})
server.listen(3000,()=>{
    console.log("server listening")
})


