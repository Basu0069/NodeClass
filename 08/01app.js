// first install npm i exress 
// and npm i nodemon 


// Create a simple server using express 

const express =require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("<h1>hello world from Express</h1>")
})

app.get("/home", (req,res)=>{
    res.send("This is home page")
})

app.get("/about", (req,res)=>{
    res.send("this is about page")
})

app.get("/contact", (req,res)=>{
    res.send("")
})


// task create another about,contact page using html tag 


app.listen(8000,()=>{
    console.log("listening to the port")
})

