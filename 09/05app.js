const express = require('express');
const router = express.Router();

let students = [
    { id: "1", name: "Alice", age: 20 },
    { id: "2", name: "Bob", age: 22 },
    { id: "3", name: "Charlie", age: 23 }
];

// Get all students
router.get('/students', (req, res) => {
    res.json(students);
});

// Post add a student
router.post('/students', (req, res) => {
    const newStudent = {
        id: String(students.length + 1),
        name: req.body.name,
        course: req.body.course
    };
    students.push(newStudent);
    res.json({message: "Student added successfully", student: newStudent});
});

//get student by id
router.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id === req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
});