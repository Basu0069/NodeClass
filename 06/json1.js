

// MOdifying JSON 
// 1.Modifying JSON data to modify json data, 
// you first need to parse it make the neessaty changes , adn then stringify it back 


const jsonString2 = '{"name": "Raj", "age": 30}';


const parsedData1 = JSON.parse(jsonString2);

parsedData1.age = 31;

const updatedJsonString = JSON.stringify(parsedData1);

console.log(updatedJsonString);



// 2. Writing JSON to a file To save Json data to a file 
// you can use the fs.write() function 
const fs = require('fs');
const data1 = {
    name: "Amit" ,
    age: 34
};


const jsonString3 = JSON.stringify(data1);

fs.writeFile('data.json', jsonString3, 'utf8', (err) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log('Data written to file');
})
