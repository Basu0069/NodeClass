const express = require("express")
const app= express();

app.get("/home",(req,res)=>{
    res.send("home page")
})

app.get("/error",(req,res)=>{
    res.send1("error page")
})
// 1
function errorhandling(error,req,res,next){
    
    res.status(error.status || 500).send("try again ")
}
app.use(errorhandling)
//2
// app.use((error,req,res,next){
    
//     res.status(error.status || 500).send("try again ")
// })



app.listen(4000)