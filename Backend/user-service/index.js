const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');


app.use(cors()); // Enable CORS for all routes


// Mock data
let users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
];


// READ -- GET ALL USERS
app.get('/users', (req, res) => res.json(users));

// CREATE
app.post('/users', (req, res) => {
    const user = { id: users.length + 1, ...req.body };
    console.log("user created:", user);

    users.push(user);
    res.status(201).json(user);
});

// UPDATE
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.map(u => u.id === id ? { ...u, ...req.body } : u);
    res.json({ message: 'User updated' });
});

// DELETE
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.json({ message: 'User deleted' });
});






app.listen(3001, () => console.log("REST API running on port 3001"));
