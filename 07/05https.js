const http= require("http");
http.createServer((req,res)=>{

    function add(a,b){
return a+b;
    }
    res.end(`the sum of two numbers: ${add(4,5)}`)
}).listen(3000, ()=>{
    console.log("sever listening")
})




// const http= require("http");
// http.createServer((req,res)=>{

//     function add(a,b){
// return a+b;
//     }
//     res.end(`factorial : ${add(4,5)}`)
// }).listen(3000, ()=>{
//     console.log("sever listening")
// })










