
// Transform stream convert file contents into uppercase 
const fs = require("fs");
const {Transform} = require("stream")
const upperCase = new Transform({
    transform(chunk,encoding,callback){
        this.push(chunk.toString().toUpperCase())
        callback()
    }
});
fs.createReadStream("tst1.txt")
.pipe(upperCase)
.pipe(fs.createWriteStream("test3.txt"))
console.log("file transform in uppercase")
