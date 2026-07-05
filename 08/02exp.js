// first install npm i exress 
// and npm i nodemon 


// Create a simple server using express 

const express =require("express")
const app = express()


app.get("/home", (req,res)=>{
    res.write("<h1>Hello world from Express</h1>")
    res.write("<h2>This is lpu</h2>")
    res.end(); //close connection 


})





app.listen(8000,()=>{
    console.log("listening to the port")
})

