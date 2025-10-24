// create file 
const EventEmitter = require("events");
const emitter = new EventEmitter();

// define event listener without arguments 
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


emitter.on("students",(name, course)=>{
    console.log(`My name is : ${name} and course is : ${course}`)
})
emitter.emit("students","Amit", "web developmnet");