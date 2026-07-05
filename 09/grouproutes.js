// Group routes middleware
const express= require("express")
const app = express()
const reqFilter=require("./mid.js")
const router= express.Router()
router.use(reqFilter)
app.get("/home", (req,res)=>{
    res.send("welcome to home page")
})

router.get("/about",reqFilter, (req,res)=>{
    res.send("welcome to about page")
})
router.get("/user",reqFilter, (req,res)=>{
    res.send("welcome to user page")
})
app.get("/login",reqFilter, (req,res)=>{
    res.send("welcome to login page")
})

app.listen(3000)