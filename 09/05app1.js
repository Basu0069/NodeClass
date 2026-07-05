//  main router file 
const express = require("express");
const app = express();

app.use(express.json());

const studentRoutes= reuqire("./04sound");
app.use("/student", studentRoutes);

app.listen(3000 , () => {
    console.log("Server running at port 3000");
})