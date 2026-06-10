import express from 'express';
import { readFile } from 'fs';
import { join } from 'path';

const ROUTEuserdata = join(process.cwd(), 'data/userdata.json');
const userdata = readFile(ROUTEuserdata, 'utf8', (err, data) => {
    if (err) {
        console.log('Error al leer el archivo:', err);
        return;
    } else {
        console.log(data)
    }
});

export { userdata };