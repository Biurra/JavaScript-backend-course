import sql, { app } from './utilities/sql.js';
import tts from './utilities/tts.js';
import * as controllers from './controllers.js';


app.use((req, res, next) => {
    console.log(`Middleware ► ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Probando, probando... 1, 2, 3...')
    tts('Testing, testing... 1, 2, 3... Welcome to my humble and very first A.P.I.')
});

app.get('/users', async (req, res) => {
    await controllers.getUsers(req, res);
    tts('These are the users registered in our website.');
});

app.post('/users', controllers.postUsers);
app.patch('/users', controllers.updateUsers);
app.delete('/users', controllers.deleteUsers);

app.get('/instruments', controllers.getInstruments);
app.post('/instruments', controllers.postInstruments);
app.post('/instruments', controllers.updateInstruments);
app.delete('/instruments', controllers.delInstruments);

app.get('/instruments/:type', controllers.filterInstType);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Cachíng! Server running on http:localhost:${PORT}`);
});
