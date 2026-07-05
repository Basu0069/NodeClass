const mongoose = require("require")
// reating conncetion and db 
mongoose.connect("mongodb://localhost:2701/abc")
// console.log("connnecting db.. ")
.then(()=> console.log("connecting successful..."))
.catch((err)=> console.log(err))

// schema -- defines the structure of the dociment , get default value and validator 

const schema = new mongoose.model("Md",schema)

