import express from "express"; 
const  app = express();
app.get("/", (req,res)=>{
    // res.write("This is the first line");
    // res.send("hello")
    res.send("hello");
});

// can redirect, will show redirect with using status code 
app.get("/about",(req,res)=>{
    res.redirect(200,"/user");
})

// can redirect, add upon the redirect page 
app.get("/home",(req,res)=>{
    res.redirect("/user");
})


app.get("/user",(req,res)=>{
    res.send("datra is coming from username here 123");
})


app.listen(8000, function(req,res){
    console.log("Server is listening to port 8000");
})