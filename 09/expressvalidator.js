const bodyParser = require('body-parser')
const express = require ('express');
const {body, validationResult } = require('express-validator');
const app = express();
const path=require("path")

// ONE LINE MISSING!!!

//middleware for POST parsing
const reparse=bodyParser.urlencoded({extended:true})
app.get("/register.html",function(req,res){
    res.sendFile(path.join(__dirname,"register.html"))
});

app.post("/setuser",reparse,
    [
        body("username")
            .notEmpty().withMessage("username required")
            .isLength({min:3}).withMessage("username must be atleast 3 characters"),

        body("password")
             .notEmpty().withMessage("username required")
            .isLength({min:5}).withMessage("username must be atleast 5 characters")
    ],
    function(req,res){
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        const response = {
            name:req.body.username,
            pass:req.body.password
        };
        res.json(response)
    }
)

app.listen(3000,()=>{
    console.log("Server started on port 3000");
}   );