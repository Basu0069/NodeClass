// //compress file using createGzip() method 
// const zlib = require("zlib")
// const fs = require("fs")
// var gzip = zlib.createGzip()
// var input = fs.createReadStream("tst1.txt")
// var output =fs.createWriteStream("comprfile1.txt.gz")
// input.pipe(gzip).pipe(output)



// //decompress file using CreateUnzip 
// var unzip= zlib.createUnzip()
// var input=fs.createReadStream("comprfile1.txt.gz")
// var output= fs.createWriteStream("file2.txt")
// input.pipe(unzip).pipe(output)


// compressing and decompressing using defalte and 
// unzip() methods of zlinb module 
var str = "hello world" 
var zlib = require('zlib')
// comporess the string 
zlib.deflate(str, function(err,buffer){
    var val= buffer.toString("base64")
    if(!err){
        console.log("Compressed String: "+ val)
    }
    // decompose 
    const buffer = Buffer.from(val, "base64")
    zlib.unzip(buffer,function(err,buffer){
        if(!err){
            console.log("Decomposed String: " +buffer.toString())
        }
    })
})