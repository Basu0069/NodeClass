const express = require("express");
const path = require("path");
const app = express();

// server register html 

app.get("/register.html", function(req,res){
    res.sendFile(path.join(__dirname, "register.html"));
});

// Handle GEt request for /setuser ;

app.get("/setuser",function(req,res){
    // send response in HTML format 
    const response = 
    <p>Username: ${req.query.username}</p>
     <p>Password: ${req.query.password}</p>;

     res.send(response);
})

// start server 
app.listen(3000,funcyion () {
    console.log("Listening on port 4000")
});

// alternative resposne 
app.get("/setuser", function(req.res){
    
})