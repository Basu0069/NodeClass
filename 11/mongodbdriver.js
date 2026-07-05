import {MongoClient} from "mongodb" 
// step 1 
const Client = new MongoClient("mongodb://localhost:27017")
await Client.connect()
console.log("mongodb connected")
// create database 
const db= Client.db("student")
const userColletion= db.collection("stud")
console.log("collection created")

// insert- one- record 
userColletion.insertOne({"sname": "raj", marks:67, domain:"networking"})
console.log("single record added")

// insert -mutiple record 
await userColletion.insertMany(["sname": "Raj" , marks:67,domain:"networking"},
    {"name": "aman", marks:65, domain:"networking"},
    {"sname": "amrit",marks:88, domain:"Testing"},
    {"sname": "riya", marks:90, domain:"programming"}
])
// console.log("multiple record ahead")
// read/search/find -- 1st basic method 
const users= userCollection.find()
console.log(users)

// 2nd method 
for await(user of users)
{
    console.log(user)
}





// 3RD METHOD 
Const users= userCollection.find().toArray()
// console.log(users)
// findone 

const users= await userCollectin.findOne({marks:65})
console.log(users)


// update 
await.userCollection.updateOne({"sname":"anrit"}, {$set: {marks}})
console.log("record updated")

// delete 
await userCollection.deleteOne({"name": "aman"})
console.log)"Record deleted")









// 3rd method 
for await(Const user of users){
    console.log(user)
}
// fetch single record 
// const users = await userCollection.findOne({course: "netwokring"})
// console.log(users)

const users = await userCollection.find({marks:{gt:75}})
console.log(users)
// TASK 
// update- record 
// deleteone 
// drop 
// updateone 
await useerCollectiin.updateOne({course: "networking"},{$set:{marks:99}})
console.log("one record updated ")
// delete record 
await userCollection.deleteOne({course: "programming"})
console.log("one record deleted")



