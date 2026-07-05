// cookie-parser
//Step1--- use it in the server
const express= require("express")
const cookieParser= require("cookie-parser")
const app =express()
app.use(cookieParser())  // cookie-parser middleware

// setting cookie---use res.cookie(name, value, options)
   app.get("/set-cookie",(req, res)=>
{
    res.cookie("username", "sukh",{
        maxAge: 1000*60*10,   //cookie value 
        httpOnly:true
    })
    res.send("cookie has been set")
})

// read/get the cookie---use req.cookie()
app.get("/get-cookie", (req,res)=>{
    console.log(req.cookies)
    const uname= req.cookies.username
    res.send(`cookie value is: ${uname}`)
})

// delete cookie---use res.clearcookie(name)
app.get("/delete-cookie", (req,res)=>{
    res.clearCookie("username")
    res.send("cookie deleted")
})
app.listen(3000,()=>{
    console.log("server.listening")
})