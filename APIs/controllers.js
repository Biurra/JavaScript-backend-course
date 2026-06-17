import { error } from 'console';
import { readFileSync } from 'fs';
import { join } from 'path';
import sql from './utilities/sql.js'

const ROUTEuserdata = join(process.cwd(), 'data/userdata.json');
const userdata = JSON.parse(readFileSync(ROUTEuserdata, 'utf8'));

async function getUsers(req, res) {
    try {
        const users = await sql`SELECT * FROM users`;
        res.json(username);
    } catch (error) {
        console.error('Error en "getUsers":', error);
        res.status(500).json({ error: 'Error de conexión' });
    }
}

async function postUsers(req, res) {
    const { id, username, email, age } = req.body;
    console.log('Usuario registrado:', { username });
    try {
        const [newUser] = await sql`
        INSERT INTO users (id, username, email, age)
        VALUES (${id}, ${username}, ${email}, ${age})
        RETURNING *
        `;
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error en "postUser":', error);
        res.status(500).json({ error: 'Error en la creación de un nuevo usuario' });
    }
};

export { userdata, getUsers, postUsers };