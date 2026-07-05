// how to send  jason 
const express = require("express")
const app = express()
app.get("/json",(req, res)=>{
    res.json(
        {
            id:1,
            name:"raj"
        },
        {
            id:2,
            name:"aman"
        },
        {
            id:3,
            name:"priya"
        },
        {
            id:4,
            name:"Basu"
        }
    )
})