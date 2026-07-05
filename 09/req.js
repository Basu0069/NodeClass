const express= require("express")
const app = express()
const reqFilter=(req,res,next)=>{
//     console.log(reqFilter)
//     next()
// }
//check the user age----apply middleware
if(!req.query.age)
{
    res.send("please enter the age")
}
else if(req.query.age<18)
{
    res.send("you are not allowed to access the page")
}
else 
{
next()
}

}
app.use(reqFilter)
app.get("/home", (req, res)=>{
    res.send("welcome to home page")
})

app.get("/about", (req, res)=>{
    res.send("This is the about page")
})
app.get("/login", (req, res)=>{
    res.send("This is the login page")
})

app.listen(3000)