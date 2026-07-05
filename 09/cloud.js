import express from 'express';
import { nanoid } from 'nanoid';


const app = express();
app.use(express.json());


let users = [ 
    { id: "1", name: "Aman", email: "aman123@gmail.com" }, 
    { id: "2", name: "Raj", email: "taj@gmail.com" },
    { id: "3", name: "Neha", email: "nh456@gmail.com" }, 
]; 


app.get("/users", (req, res) => {
    res.json(users);
});



app.get("/users/:id", (req, res) => {
    const u = users.find(x => x.id === req.params.id);
    if (!u) return res.status(404).json({ error: "User not found" });
    res.json(u);
}); 


app.post('/users', (req, res) => {
    
    const { name, email } = req.body || {};
    
    
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }
    
    
    const id = nanoid(8); 
    
    
    const newUser = { id, name, email };
   
    users.push(newUser);
    
    
    res.status(201).json(newUser);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});