const express = require("require");
const app = express()
app.get("index",function(req,res){
    res.sendFile(__dirname+ "/04index.html")
})

app.listen(8000, function(req,res){
    console.log("Server is listening to port 8000");
})