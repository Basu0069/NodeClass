const express = require("express");
const path = require("path");
const app = express();

// use express built in body parser for form data 
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// server register.html 
app.get("/register.html",(req,res)=> {
    res.sendFile(path.join(__dirname, ))
})



// POST handler 
app.post("/setuserq")