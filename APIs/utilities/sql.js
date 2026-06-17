import express from 'express';
import postgres from 'postgres';
import dotenv from 'dotenv';

//NOTA: Esto carga las variables. Indispensable
dotenv.config({ path: '../sensible.env' });

const app = express();
app.use(express.json());

const sql = postgres(process.env.DATABASE_URL, {
    ssl: 'require'
});

//NOTA: usar "export default" cuando un archivo tiene una función en particular => usar CASI siempre para "utilities"
//Al importar, no se ponen los {}, se lo llama así nomás, como en postgres o express. 
export { app };
export default sql;

