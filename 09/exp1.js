// how to use html 
const express= require("express")
const app= express()
// import 'dotenv/config'
// require('dotenv').config();
const PORT= process.env.PORT  || 4000
app.get("/home", (req,res)=>{
    res.write("<h1>hello world from Express</h1>")
    res.write("<h2>welcome to lpu</h2>")
    console.log(process)
    res.end()
})

app.listen(PORT,() =>{
    console.log("listening to the port")
})
