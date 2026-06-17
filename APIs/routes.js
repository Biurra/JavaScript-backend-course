import sql, { app } from './utilities/sql.js';
import tts from './utilities/tts.js';
import { readFile } from 'fs';
import { join } from 'path';
import { getUsers, postUsers } from './controllers.js';


app.use((req, res, next) => {
    console.log(`Middleware ► ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Probando, probando... 1, 2, 3...')
    tts('Testing, testing... 1, 2, 3... Welcome to my humble and very first A.P.I.')
});

app.get('/users', async (req, res) => {
    await getUsers(req, res);
    tts('These are the users registered in our website.');

});

app.post('/users', postUsers);

//app.get('/instruments', async (req, res) => {
//    await getInstruments(req, res);
//    tts('For a detailed view of our catalogue, please select one of the following.');
//});
//
//app.get('/instruments/bass', getInstBass);
//app.get('/instruments/guitar', getInstGuitar);
//app.get('/instruments/keyboards', getInstKeys);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Cachíng! Server running on http:localhost:${PORT}`);
});
