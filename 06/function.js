function greet(name, callback){
    const msg =`hello , ${name}`;
    callback(msg);
}
greet("Sukh",(message)=>{
    console.log(message);
});



// asynchronous 
function greatsync(name,callback){
    setTimeout(()=>{
        const msg= `hello , ${name}`;
        callback(msg);
    }, 1000);
}
greetasync("Sukh",(message)=>{
    console.log(message);
})

