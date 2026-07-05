const express = require("express")
const app= express()
app.get("/",(req,res)=>{
    res.send("hello world from Express")
})
app.get("/home", (req,res)=>{
    res.send("welcome to home page")
})
app.listen(8000, ()=>{
    console.log("listening to the port")
})