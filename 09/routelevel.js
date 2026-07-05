// Route level middleware-and also make different file for middleware
const express= require("express")
const app = express()

const reqFilter=(req, res, next)=>{
     if(!req.query.age)
        {
         res.send("please enter age ")
    } 
    else if(req.query.age<18)
    {
    res.send("you cannot access this page")
    }
    else
        {
        next()
    }
}

app.get("/home", (req,res)=>{
    res.send("welcome to home page")
})

// middleware on a single route
app.get("/about",reqFilter, (req,res)=>{
    res.send("welcome to about page")
})
app.get("/user", (req,res)=>{
    res.send("welcome to user page")
})

app.listen(3000)