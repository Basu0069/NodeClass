import express from 'express';
import {nanoid } from 'nanoid';
const app = express();
app.use(express.json());
let items = [
    {id:"1", name:"item1"},
    {id:"2", name:"item2"},
    {id:"3", name:"item3"}
];
app.get('/items', (req, res) => {
    res.json(items);
});
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === req.params.id);
    if(item){
        return res.status(404).json({error:"Item not found"});
        res.json(item);
    }
});
app.post('/items', (req, res) => {
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
app.put('/items/:id', (req, res) => {
    const {name,email} = req.body || {};
    const itemIndex = items.findIndex(i => i.id === req.params.id);
    if(itemIndex === -1){
        return res.status(404).json({error:"Item not found"});
    }
    items[itemIndex] = {...items[itemIndex],...(name !== undefined ? {name} : {}), ...(email !== undefined ? {email} : {})};
    res.json(items[itemIndex]);
});

//delete
app.delete('/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === req.params.id);
    if(itemIndex === -1){
        return res.status(404).json({error:"Item not found"});
    }
    const deletedItem = items.splice(itemIndex, 1);
    res.json(deletedItem[0]);
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log`(Server running at http://localhost:${PORT}/`);
});