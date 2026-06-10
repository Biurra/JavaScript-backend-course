import express from 'express';
import { readFile } from 'fs';
import { join } from 'path';
//import { userdata } from './controllers.js';

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(`Middleware ► ${req.method} ${req.url}`);
    next();
});

app.get('/', (req,res) => {
    res.send('Probando, probando... 1, 2, 3...')
});

const userdata = [{username: 'ana12', id: 5300, email: 'ana12@gmail.com', age: 30},
    {username: 'pacoloco', id: 5301, email: 'elpakitol0ko@yahoo.com', age: 94},
    {username: 'tommy vercetti', id: 5302, email: 'hardwoodbutcher@hotmail.com', age: 35},
    {username: 'diego', id: 5303, email: 'diegobottegoni@outlook.com', age: 68},
    {username: 'diegomalvado', id: 3035, email: 'inogettobogeid@hotmail.com', age: 86}];

app.get('/users', (req, res) => {
    res.status(201).json(userdata);
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
