import { error } from 'console';
import { readFileSync } from 'fs';
import { join } from 'path';

const ROUTEuserdata = join(process.cwd(), 'data/userdata.json');
const userdata = JSON.parse(readFileSync(ROUTEuserdata, 'utf8'));

async function getUsers(req, res) {
    try {
        const users = await sql`SELECT * FROM users`;
        res.json(users);
    } catch (error) {
        console.error('Error en "getUsers":', error);
        res.status(500).json({ error: 'Error de conexión' });
    }
}


export { userdata, getUsers };