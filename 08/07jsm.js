const express= require("express")
const bodyParser= require("body-parser")
const app= express();
app.post("/calc", function(req,res){
    res.sendFile(__dirname +"/calculator.html")
    res.send("Welcome for the calculatpr ")
    console.log(req.body);
})

app.use(bodyParser.urlencoded"({extended:true}))
    let n1= Number(req.body(n1))
    let n2= Number(req.body(n2))
    let sum = num1+num2res.send("the sum of two numbers: " +sum)
    
app.listen(8000,function(req,res){
    console.log("Sever is listening port 8000")
})


// donwlaod cookie-parser , body-parser,multer,nodemon 