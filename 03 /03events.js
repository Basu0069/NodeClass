// create file 
const EventEmitter = require("events");
const emitter = new EventEmitter();

// to keep the track of events


// define event listener without arguments 

// add event count on each listener 
// listener 1 
emitter.on("abc", ()=> {
   
    console.log("welcome to lpu")
})

// listener 2 
emitter.on("abc",()=>{
    console.log("hello world ")
})

// emit the event 
emitter.emit("abc");


// Events with parametets 

// listner 1 
emitter.on("students",(name, course)=>{
    console.log(`My name is : ${name} and course is : ${course}`)
})

// listener 2 
emitter.once("students", (name)=>{
    console.log(`My name is : ${name}`)
})
emitter.emit("students","Amit", "web developmnet");




// single arguments as an object --- key value pair 

emitter.on("greet",(arg) => {
    console.log(`hello , my name is ${arg.username} and  I am student from ${arg.prof}`)
})
emitter.emit("greet", {username: "raj", prof: "cse"})



