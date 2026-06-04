import { readFile } from 'fs';
const userdata = 'data/userdata.json';

function getHome(res) {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.end('Probando, probando... 1, 2, 3...');
}

function getUsers(res) {
    res.writeHead(200, { 'Content-Type': 'application/JSON'});
        const users = readFile(userdata, 'utf8', (err, parsed) => {
            if (err) {
                console.error('Error al leer el archivo:', err);
                return;
            }

            const parsedUsers = JSON.parse(parsed);
//            console.log('Leído:', parsedUsers) // COMMENTaesthetic
            res.end(JSON.stringify(parsedUsers));
        });
}

export { getHome, getUsers };