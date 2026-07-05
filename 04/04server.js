const http = require("http");
// web server 
const server = http.createServer((req,res)=>{
    if(req.url=== "/"){
        // you can also add html tag 

        // res.setHeader("content-type", "text/html");
        res.write("welcome to input and nodejs, di hihoo");
        res.end(); 
    }
    if(req.url === "/source"){
        res.write("ajdiaida");
        res.end();
    }
})




const PORT= 4000;
server.listen(PORT, ()=>{
    console.log(`Listening to Port ${PORT}`);
})