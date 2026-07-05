import express from 'express';
import {nanoid } from 'nanoid';
const app = express();
app.use(express.json());
let users = [
    {id:"1", name:"item1", course: "MCA"},
    {id:"2", name:"item2", course: "Mtech"},
    {id:"3", name:"item3", course: "BBA"}
];
app.get('/users', (req, res) => {
    res.json(users);
});
app.get('/users/:id', (req, res) => {
    const item = users.find(i => i.id === req.params.id);
    if(!item)
        return res.status(404).json({error:"Item not found"});
        res.json(item);
    }
);
app.post('/users', (req, res) => {
    const {name,email} = req.body || {};
    if (!name || !email){
        return res.status(400).json({error:"Name and email are required"});
    }
    const id = nanoid ? nanoid(8) : String(Date.now());
    const newUser = {id, name, email};
    users.push (newUser);
    res.status(201).json(newUser);
});


//update 
app.put('/users/:id', (req, res) => {
    const {name,email} = req.body || {};
    const itemIndex = users.findIndex(i => i.id === req.params.id);
    if(itemIndex === -1){
        return res.status(404).json({error:"Item not found"});
    }
    users[itemIndex] = {...users[itemIndex],...(name !== undefined ? {name} : {}), ...(email !== undefined ? {email} : {})};
    res.json(users[itemIndex]);
});

//delete
app.delete('/users/:id', (req, res) => {
    const itemIndex = users.findIndex(i => i.id === req.params.id);
    if(itemIndex === -1){
        return res.status(404).json({error:"Item not found"});
    }
    const deletedItem = users.splice(itemIndex, 1);
    res.json(deletedItem[0]);
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}/');
});

// status coce
// 5 classes
// informational 100-199
// successful 200-299
// redirection 300-399
// client error 400-499
// server error 500-599