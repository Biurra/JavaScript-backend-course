import { createServer } from 'http';
import { writeFileSync, readFile } from 'fs';
import { join } from 'path';
import { getHome, getUsers } from './controls.js';

const userdata = join(process.cwd(), 'data/userdata.json');
// console.log("Ruta de la data de usuario:", userdata); // COMMENTaesthetic

const server = createServer((req, res) => {
    const method = req.method;
    const url = req.url;

    if (method === 'GET' && url === '/') {
        getHome(res);
        return;
    }

    if (method === 'GET' && url === '/users') {
        getUsers(res);
        return;
    }
    
    

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Route not found');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http:localhost:${PORT}`);
});


