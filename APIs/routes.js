import express from 'express';
import { readFile } from 'fs';
import { join } from 'path';
import { userdata } from './data/userdata.js';


app.use((req, res, next) => {
    console.log(`Middleware ► ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Probando, probando... 1, 2, 3...')
});

app.get('/users', (req, res) => {
    res.send(userdata);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    console.log('Usuario registrado:', newUser);
    userdata.push(newUser)
    // {"username": '"pablo", "id": 5304, "email": "pablitoclavounclavito@clavo.com", "age": 175} 
    res.status(201).json(newUser);
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Cachíng! Server running on http:localhost:${PORT}`);
});
