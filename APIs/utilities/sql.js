import postgres from 'postgres';
import dotenv from 'dotenv';

//NOTA: Esto carga las variables. Indispensable
dotenv.config({ path: '../sensible.env' });

const app = express();
app.use(express.json());

const sql = postgres({
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '5432'),
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    ssl: 'require'
});

//NOTA: usar "export default" cuando un archivo tiene una función en particular => usar siempre para "utilities"
export default sql;