import {MongoClient} from "mongodb"
// create connection
const Client=new MongoClient("mongodb://localhost:27017")
await Client.connect()
console.log("mongo db connected ")
// create database 

const db=Client.db("node")
console.log("database created ")
// create collection
const userCollection=db.collection("users")
// insert record 
await userCollection.insertOne({name:"riya", course: "programming" , marks:68})

await userCollection.insertMany([
    {name:"Shreya", course: "networking" , marks:79},
    {name:"Gagan", course: "web" , marks:85}
])

// find
// const users=userCollection.find()
// const users=userCollection().find().toArray()
// console.log(users)

// using operator
const users=await userCollection.find({marks:{$gt:70}}).toArray()
// other method 
for await (const user of users ){
    console.log(user)
}


console.log(users)


// update 

await userCollection.updateOne({name:"riya"},{$set:{marks:75}})

// delete
const result=await userCollection.deleteOne({name:"Gagan"})
console.log(`${result.deletedCount} document(s) deleted`)
// close connection
// await Client.close()
// console.log("mongo db disconnected ")


// schema -- structure of the document
// validation -- to validate the structure of the document
// mongoose odm-- object document mapping`





































const mongoose = require('mongoose');
// creating connection and db 
try{
    mongoose.connect('mongodb://localhost:27017/abc')
}catch(error){
    console.error(error);
    process.exit();
}
// 2nd method
mongoose.connect('mongodb://localhost:27017/abc')
.then(()=>console.log("mongo db connected"))
.catch((error)=>{
    console.error(error);
    process.exit();
});

// schema 
const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    marks: {
        type:Number,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    Data:{
        type: Date,
        default: Date.now
    }       
})  
// model - collection creation
const User=mongoose.model('User', userSchema);

// insert document
// const doc1=new User({
//     name:"Riya",
//     course:"programming",
//     marks:68,
//     email:"riya05@gmail.com"
// });
// doc1.save()

// mongoose provide inbuilt crud meethods

// 2nd method 
await User.create({
    name:"Shreya",
    course:"networking",
    marks:79,
    email:"Shreya05@gmail.com"
});


// multiple records
await User.insertMany([
    {
        name:"Gagan",
        course:"web",
        marks:85,
        email:""
    },
    {
        name:"Aman",
        course:"database",
        marks:90,
        email:""
    }
]);


const doc4 = new md({
    name: "amrit",
    course:"web development",
    regid: 28, 
    email: "aps123@gmail.com"
})

const result= await md.insertMany({doc2,doc3,doc4})
console.log(result)
// find/read/search/get document 

const getEDocument=async()=>{
    const result= await md.find({course:"programming"})
    .select({name:1})
    .limit(1)
    console.log(result)
}
updateDocument("694f4783ab363f2ae7890087")



// updathe the record 

const updateDocument= async()=>{
    try{
        const result= await md.finaldByIdandUpdate({_id},{
            $set:{
                courseL "html"
            }
        })
        console.log(result)
    }catch(err)
    console.log(err)
    }
}
