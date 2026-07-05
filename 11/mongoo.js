import mongoose from "mongoose"
// step 21 connect ot mongodv server 

try{
    await mongoose.connect("mongodb://localhost:27017/db_users")
    mongoose.set("debug", true)
}catch(error)
{
    console.log(error)
    process.exit()
}


// Step-2 create schemma 

const userSchema = mongoose.Schema){
    name:{type:String, ruqired: true}, 
    email:{type:String, required: true, unique:true},
    age:{type:Number, required:true,min:18},
    createAt: {type:Data, default: Date.now(),
    updatedAt:{type:Data, default:Date.now()}
    }
}
// step-3-- create a model 
const Users= mongoose.model("user",userSchema)
