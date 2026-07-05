const data={
    name:"abc",
    age:"23",
    dept:"cse"
}
console.group(data.dept);
// 1mthod- convert objects into json 
const jsondata= JSON.stringify(data)
console.log(jsondata)
console.log(jsondata.dept)


// 2method0-- convert json into object 
const objdata=JSON.parse(jsondata)
console.log(objdata)
console.log(objdata.dept)
