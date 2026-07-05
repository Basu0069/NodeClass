const express= require("express")
const app= express()

app.get("/user/:username", (req,res)=> {
    console.log(req.params)
    res.send(`My name is : ${req.params.username}`)
})

app.listen(3000,()=>{
    console.log("server is running");
})